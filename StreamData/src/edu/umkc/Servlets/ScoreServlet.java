package edu.umkc.Servlets;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.LinkedList;
import java.util.Map;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import edu.umkc.Compute.ScoreCalculator;
import edu.umkc.Constants.DiSCConstants;
import edu.umkc.Stream.StreamingConsumer;
import edu.umkc.Util.CommonUtil;
import edu.umkc.Util.PropertyReader;

@WebServlet("/CalcScore")
public class ScoreServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	private static final Logger logger = LogManager.getLogger(StreamingConsumer.class.getName());
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) {  
		doWork(request, response);
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) {  
		doWork(request, response);
	}
	
	protected void doWork(HttpServletRequest request, HttpServletResponse response) {  
		logger.debug("ScoreServlet :: doWork :: Start");
		try(BufferedReader br = new BufferedReader(new FileReader(new File(DiSCConstants.EST_C_FILE)))) {
			Map<String, LinkedList<LinkedList<Double>>> estimatedCounts = CommonUtil.convertJsonToMap(br.readLine());
			for (String key : estimatedCounts.keySet()) {
				if(key.equals("jet_4_eta,jet_2_b-tag,jet_2_phi")) {
				//Hardcoding the family. Needs to be as shown below.
				//if(key.equals(PropertyReader.getInstance().getProperty(DiSCConstants.FAMILY))) {
					logger.debug("ScoreServlet :: doWork :: Estimated Count Matrix :: " + estimatedCounts.get(key));
					logger.debug("Score Calculated :: " + ScoreCalculator.getScore(CommonUtil.convertToMatrix(estimatedCounts.get(key))));
					break;
				}
			}
		} catch(Exception e) {
			logger.error("ScoreServlet :: Exception encountered :: " + e);
		}
	}
	
	
}
