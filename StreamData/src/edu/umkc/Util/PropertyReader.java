package edu.umkc.Util;

import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.Properties;

import edu.umkc.Constants.DiSCConstants;

public class PropertyReader {

	public static Properties properties;
	
	private PropertyReader() {
		
	}
	
	public static Properties getInstance() {
		if(properties == null) {
			try (FileInputStream fis = new FileInputStream(DiSCConstants.PROPERTY_FILE);
					InputStreamReader isr = new InputStreamReader(fis, "UTF-8")) {
				properties = new Properties();
				properties.load(isr);
			} catch(Exception e) {
				e.printStackTrace();
			}
		}
		return properties;
	}
}
