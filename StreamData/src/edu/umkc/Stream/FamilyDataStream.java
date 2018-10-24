package edu.umkc.Stream;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.Set;

import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import edu.umkc.Constants.DiSCConstants;
import edu.umkc.Util.CommonUtil;
import edu.umkc.Util.PropertyReader;

@ServerEndpoint("/FamilyDataStream")
public class FamilyDataStream {

	private static final Logger logger = LogManager.getLogger(CommonUtil.class.getName());
	
	@OnOpen
	public void streamData(Session session) {
		logger.debug("FamilyDataStream :: streamData ::  Start")
		Set<Session> allSessions = session.getOpenSessions();
		if (allSessions != null && allSessions.size() != 0) {
			for (Session sess : allSessions) {
				try (BufferedReader br = new BufferedReader(
						new FileReader(new File(PropertyReader.getInstance().getProperty(DiSCConstants.LOG_FILE))))) {
					while(true) {
						String line = null;
						while ((line = br.readLine()) != null) {
							if (line.contains(DiSCConstants.FAMILY_SIZE_SEARCH_STRING)) {
								String[] arr = line.split(" ");
								String familySize = arr[6].trim().replaceAll("\\[", "").replaceAll("\\]","");
								sess.getBasicRemote().sendText(familySize);
							}
						}
					}
				} catch (Exception e) {
					logger.debug("FamilyDataStream :: streamData :: Exception encountered.");
					e.printStackTrace();
				}
			}
		}
	}
}
