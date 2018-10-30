package edu.umkc.Stream;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.Set;

import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import edu.umkc.Constants.DiSCConstants;
import edu.umkc.Util.CommonUtil;
import edu.umkc.Util.PropertyReader;

@ServerEndpoint("/NodeStream")
public class NodeCommunicationStream {

	private static Set<Session> allSessions;

	@OnOpen
	public void streamData(Session session) {
		System.out.println("NodeCommunicationStream :: streamData ::  Star");
		allSessions = session.getOpenSessions();
		if (allSessions != null && allSessions.size() != 0) {
			for (Session sess : allSessions) {
				for(int i=0; i<10; i++) {
					try {
						try(BufferedReader br = new BufferedReader(new FileReader(new File(PropertyReader.getInstance().getProperty(DiSCConstants.LOG_FILE))))) {
							String line = null;
							while((line = br.readLine()) != null ) {
								if(line.contains(DiSCConstants.NODE_SEARCH_STRING)) {
									String[] arr = line.split("::");
									String toNode = arr[6].trim();
									sess.getBasicRemote().sendText(CommonUtil.getNodeNum(toNode));
								}
							}
						} catch (Exception e) {
							
						}
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			}
		}
	}
}