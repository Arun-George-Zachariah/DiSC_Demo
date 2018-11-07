package edu.umkc.Compute;

public class ScoreCalculator {

	public static Double getScore(Double[][] inp) {
		//Assuming prior as a 2X4 matrix with the values as 1.
		Double[][] prior = new Double[][] {
			{1.0,1.0,1.0,1.0},
			{1.0,1.0,1.0,1.0}
		};
		
		Double score = 0d;
		
		for(int i=0; i<4; i++) {
			Double sumM = inp[0][i] + inp[1][i];
			Double sumAplha = prior[0][i] + prior[1][i];
			score += Math.log10(sumAplha/(sumAplha + sumM));
		}
		
		for(int i=0; i<2; i++) {
			for(int j=0; j<4; j++) {
				score += Math.log10((prior[i][j] + inp[i][j])/prior[i][j]);
			}
		}
		
		return score;
	}
}
