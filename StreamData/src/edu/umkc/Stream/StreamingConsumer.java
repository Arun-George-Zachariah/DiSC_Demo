package edu.umkc.Stream;

import java.util.LinkedList;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.BlockingQueue;

import javax.websocket.Session;

import edu.umkc.Constants.DiSCConstants;
import edu.umkc.ErrorCalc.ErrorCalculator;
import edu.umkc.Util.CommonUtil;
import edu.umkc.Util.PropertyReader;

public class StreamingConsumer implements Runnable {

	protected BlockingQueue<String> queue;
	private Set<Session> allSessions;
	private long startTime;

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
					if (line.contains(CommonUtil.getDelimter())) {
						String[] arr = line.split("=");
						if (arr != null) {
							Map<String, LinkedList<LinkedList<Double>>> estimatedCounts = CommonUtil.convertJsonToMap(arr[1].trim());
							Map<String, LinkedList<LinkedList<Double>>> trueCounts = CommonUtil.convertJsonToMap(CommonUtil.getTrueCount());
							String result = ErrorCalculator.calculateError(trueCounts, estimatedCounts, PropertyReader.getInstance().getProperty(DiSCConstants.FAMILY), startTime);
							if (result != null) {
								System.out.println("Rertuning result :: " + result);
								session.getBasicRemote().sendText(result);
							} else {
								System.out.println("Error in generating the error percentage!");
							}
						}
					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

}
