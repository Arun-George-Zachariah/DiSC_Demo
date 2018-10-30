package edu.umkc.Stream;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.util.LinkedList;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.BlockingQueue;

import javax.websocket.Session;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import edu.umkc.Constants.DiSCConstants;
import edu.umkc.ErrorCalc.ErrorCalculator;
import edu.umkc.Util.CommonUtil;
import edu.umkc.Util.PropertyReader;

public class StreamingConsumer implements Runnable {

	protected BlockingQueue<String> queue;
	private Set<Session> allSessions;
	private long startTime;
	private static final Logger logger = LogManager.getLogger(StreamingConsumer.class.getName());

	public StreamingConsumer(BlockingQueue<String> queue, Set<Session> allSessions, long startTime) {
		this.queue = queue;
		this.allSessions = allSessions;
		this.startTime = startTime;
	}

	@Override
	public void run() {
		while(true) {
			try {
				String line = queue.take();
				for (Session session : allSessions) {
					if (line.contains(CommonUtil.getDelimter())) { //Streaming Estimated Counts
						String[] arr = line.split("=");
						if (arr != null) {
							Map<String, LinkedList<LinkedList<Double>>> estimatedCounts = CommonUtil.convertJsonToMap(arr[1].trim());
							Map<String, LinkedList<LinkedList<Double>>> trueCounts = CommonUtil.convertJsonToMap(CommonUtil.getTrueCount());
							String result = ErrorCalculator.calculateError(trueCounts, estimatedCounts, PropertyReader.getInstance().getProperty(DiSCConstants.FAMILY), startTime);
							if (result != null) {
								logger.debug("StreamingConsumer :: run :: result :: " + result);
								session.getBasicRemote().sendText(result);
							} else {
								logger.error("StreamingConsumer :: run ::  Result was null");
							}
						}
					} else if (line.contains(DiSCConstants.FAMILY_SIZE_SEARCH_STRING)) { //Streaming Family Size
						logger.debug("Entering Arun");
						String[] arr = line.trim().split(" ");
						String node = arr[3].trim().replaceAll("\\(", "").replaceAll("\\)","");
						String familySize = arr[5].trim().replaceAll("\\[", "").replaceAll("\\]","");
						logger.debug("StreamingConsumer :: run :: Family size is :: " + familySize);
						try (BufferedWriter bw = new BufferedWriter(new FileWriter(new File("/users/arung/jetty-distribution-9.4.12.v20180830/webapps/families/familySize.txt"), true))) {
							bw.write(CommonUtil.getNode(node) + "::" + familySize + "\n");
							bw.flush();
						} catch (Exception e) {
							logger.error("StreamingConsumer :: run ::  Exception while writing family size");
							e.printStackTrace();
						}
					}
				}
			} catch (Exception e) {
				logger.error("StreamingConsumer :: run ::  Exception encountered :: " + e);
				e.printStackTrace();

			}
		}
	}

}
