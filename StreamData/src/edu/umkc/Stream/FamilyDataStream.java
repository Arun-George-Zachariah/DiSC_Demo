package edu.umkc.Stream;

import java.util.Set;

import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import edu.umkc.FamilyListeners.Family10Listener;
import edu.umkc.FamilyListeners.Family11Listener;
import edu.umkc.FamilyListeners.Family12Listener;
import edu.umkc.FamilyListeners.Family13Listener;
import edu.umkc.FamilyListeners.Family14Listener;
import edu.umkc.FamilyListeners.Family15Listener;
import edu.umkc.FamilyListeners.Family16Listener;
import edu.umkc.FamilyListeners.Family1Listener;
import edu.umkc.FamilyListeners.Family2Listener;
import edu.umkc.FamilyListeners.Family3Listener;
import edu.umkc.FamilyListeners.Family4Listener;
import edu.umkc.FamilyListeners.Family5Listener;
import edu.umkc.FamilyListeners.Family6Listener;
import edu.umkc.FamilyListeners.Family7Listener;
import edu.umkc.FamilyListeners.Family8Listener;
import edu.umkc.FamilyListeners.Family9Listener;

@ServerEndpoint("/FamilyDataStream")
public class FamilyDataStream {

	private static final Logger logger = LogManager.getLogger(FamilyDataStream.class.getName());
	
	@OnOpen
	public void streamData(Session session) {
		logger.debug("FamilyDataStream :: streamData ::  Start");
		Set<Session> allSessions = session.getOpenSessions();
		if (allSessions != null && allSessions.size() != 0) {
			Thread fam1Th = new Family1Listener(allSessions);
			fam1Th.start();
			
			Thread fam2Th = new Family2Listener(allSessions);
			fam2Th.start();
			
			Thread fam3Th = new Family3Listener(allSessions);
			fam3Th.start();
			
			Thread fam4Th = new Family4Listener(allSessions);
			fam4Th.start();
			
			Thread fam5Th = new Family5Listener(allSessions);
			fam5Th.start();
			
			Thread fam6Th = new Family6Listener(allSessions);
			fam6Th.start();
			
			Thread fam7Th = new Family7Listener(allSessions);
			fam7Th.start();
			
			Thread fam8Th = new Family8Listener(allSessions);
			fam8Th.start();
			
			Thread fam9Th = new Family9Listener(allSessions);
			fam9Th.start();
			
			Thread fam10Th = new Family10Listener(allSessions);
			fam10Th.start();
			
			Thread fam11Th = new Family11Listener(allSessions);
			fam11Th.start();
			
			Thread fam12Th = new Family12Listener(allSessions);
			fam12Th.start();
			
			Thread fam13Th = new Family13Listener(allSessions);
			fam13Th.start();
			
			Thread fam14Th = new Family14Listener(allSessions);
			fam14Th.start();
			
			Thread fam15Th = new Family15Listener(allSessions);
			fam15Th.start();
			
			Thread fam16Th = new Family16Listener(allSessions);
			fam16Th.start();			
		}
	}
}
