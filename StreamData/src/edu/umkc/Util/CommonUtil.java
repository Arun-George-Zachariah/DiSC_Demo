package edu.umkc.Util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.*;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONObject;

import edu.umkc.Constants.DiSCConstants;

public class CommonUtil {

	public static String trueCount = null;
	private static final Logger logger = LogManager.getLogger(CommonUtil.class.getName());

	public static Map<String, LinkedList<LinkedList<Double>>> convertJsonToMap(String jsonStr) {
		Map<String, LinkedList<LinkedList<Double>>> retMap = new HashMap<String, LinkedList<LinkedList<Double>>>();
		JSONObject json = new JSONObject(jsonStr);
		if (json != null && json.keys() != null) {
			Iterator<String> keys = json.keys();
			while (keys.hasNext()) {
				String key = keys.next();
				JSONArray array = (JSONArray) json.get(key);
				LinkedList<LinkedList<Double>> outerList = new LinkedList<LinkedList<Double>>();
				for (int i = 0; i < array.length(); i++) {
					LinkedList<Double> innerList = new LinkedList<Double>();
					for (int j = 0; j < array.optJSONArray(i).length(); j++) {
						innerList.add(array.optJSONArray(i).optDouble(j));
					}
					outerList.add(innerList);
				}
				retMap.put(key, outerList);
			}
		}
		return retMap;
	}

	public static String getTrueCount() {
		if (trueCount == null) {
			try (BufferedReader br = new BufferedReader(new FileReader(new File(PropertyReader.getInstance().getProperty(DiSCConstants.TRUE_COUNTS_FILE))))) {
				trueCount = br.readLine();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return trueCount;
	}
	
	public static String getDelimter() {
		return "DiSC: Node (" + PropertyReader.getInstance().getProperty(DiSCConstants.NODE_NUM) + "-0) EST C";
	}
	
	public static String getNodeNum(String ip) {
		if(ip.equals(DiSCConstants.NODE_1)) {
			return "1";
		} else if(ip.equals(DiSCConstants.NODE_2)) {
			return "2";
		} else if(ip.equals(DiSCConstants.NODE_3)) {
			return "3";
		} else if(ip.equals(DiSCConstants.NODE_4)) {
			return "4";
		} else if(ip.equals(DiSCConstants.NODE_5)) {
			return "5";
		} else if(ip.equals(DiSCConstants.NODE_6)) {
			return "6";
		} else if(ip.equals(DiSCConstants.NODE_7)) {
			return "7";
		} else if(ip.equals(DiSCConstants.NODE_8)) {
			return "8";
		} else if(ip.equals(DiSCConstants.NODE_9)) {
			return "9";
		} else if(ip.equals(DiSCConstants.NODE_10)) {
			return "10";
		} else if(ip.equals(DiSCConstants.NODE_11)) {
			return "11";
		} else if(ip.equals(DiSCConstants.NODE_12)) {
			return "12";
		} else if(ip.equals(DiSCConstants.NODE_13)) {
			return "13";
		} else if(ip.equals(DiSCConstants.NODE_14)) {
			return "14";
		} else if(ip.equals(DiSCConstants.NODE_15)) {
			return "15";
		} else if(ip.equals(DiSCConstants.NODE_16)) {
			return "16";
		}
		
		return null;
	}
	
	public static String getNode(String nodeNum) {
		logger.debug("CommonUtil :: getNode :: nodeNum :: " + nodeNum);
		if(nodeNum.equals(DiSCConstants.N_1)) {
			return "1";
		} else if(nodeNum.equals(DiSCConstants.N_2)) {
			logger.debug("CommonUtil :: returning 2");
			return "2";
		} else if(nodeNum.equals(DiSCConstants.N_3)) {
			return "3";
		} else if(nodeNum.equals(DiSCConstants.N_4)) {
			return "4";
		} else if(nodeNum.equals(DiSCConstants.N_5)) {
			return "5";
		} else if(nodeNum.equals(DiSCConstants.N_6)) {
			return "6";
		} else if(nodeNum.equals(DiSCConstants.N_7)) {
			return "7";
		} else if(nodeNum.equals(DiSCConstants.N_8)) {
			return "8";
		} else if(nodeNum.equals(DiSCConstants.N_9)) {
			return "9";
		} else if(nodeNum.equals(DiSCConstants.N_10)) {
			return "10";
		} else if(nodeNum.equals(DiSCConstants.N_11)) {
			return "11";
		} else if(nodeNum.equals(DiSCConstants.N_12)) {
			return "12";
		} else if(nodeNum.equals(DiSCConstants.N_13)) {
			return "13";
		} else if(nodeNum.equals(DiSCConstants.N_14)) {
			return "14";
		} else if(nodeNum.equals(DiSCConstants.N_15)) {
			return "15";
		} else if(nodeNum.equals(DiSCConstants.N_16)) {
			return "16";
		}
		
		return null;
	}
	
}
