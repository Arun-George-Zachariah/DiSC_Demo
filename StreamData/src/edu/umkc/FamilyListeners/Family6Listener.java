package edu.umkc.FamilyListeners;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.Set;

import javax.websocket.Session;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import edu.umkc.Constants.DiSCConstants;

public class Family6Listener extends Thread{

	private Set<Session> allSessions;
	private static final Logger logger = LogManager.getLogger(Family6Listener.class.getName());

	public Family6Listener(Set<Session> allSessions) {
		this.allSessions = allSessions;
	}
	
	@Override
	public void run() {
		logger.debug("Family1Listener :: run :: Start");
		if (allSessions != null && allSessions.size() != 0) {
			for (Session sess : allSessions) {
				//Node 1
				BufferedReader reader = null;
				try {
					URL url = new URL("http://" + DiSCConstants.IP_6 + ":8080/families/familySize.txt");
					reader = new BufferedReader(new InputStreamReader(url.openStream()));
			        String line;
			        while(true) {
				        while ((line = reader.readLine()) != null) {
				    		logger.debug("Family1Listener :: streamData ::  Start");
							sess.getBasicRemote().sendText(line);
				        }
			        }
				} catch(Exception e) {
					logger.error("Exception Encountered while listening to :: " + DiSCConstants.IP_6);
				} finally {
			        try {
						reader.close();
					} catch (IOException e) {
						logger.error("Exception Encountered while closing Reader 1");
						e.printStackTrace();
					}
				}
			}
		}
	}
}
