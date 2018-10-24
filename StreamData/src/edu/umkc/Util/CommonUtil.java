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
	
}
