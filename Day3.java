import java.util.Scanner;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import static java.lang.Math.min;
import static java.lang.Math.max;

public class Day3 {
    public static void main(String[] args) throws IOException {
        File f = new File("day03.txt");
        Scanner s = new Scanner(f);
        int out = 0, out2 = 0;
        ArrayList<String> rows = new ArrayList<String>();
        ArrayList<int[]> gears = new ArrayList<int[]>();
        while (s.hasNextLine()) {
            String l = s.nextLine();
            rows.add(l);
            gears.add(new int[l.length()]);
        }
        s.close();
        for (int i = 0; i < rows.size(); i++) {
            String r = rows.get(i);
            for (int j = 0; j < r.length(); j++) {
                if (Character.isDigit(r.charAt(j))) {
                    int jj;
                    for (jj = j + 1; jj < r.length() && Character.isDigit(r.charAt(jj)); jj++);
                    outerLoop:
                    for (int k = max(i-1, 0); k <= min(i+1, rows.size()-1); k++) {
                        for (int l = max(j-1, 0); l <= min(jj, rows.get(k).length()-1); l++) {
                            char c = rows.get(k).charAt(l);
                            if (!Character.isDigit(c) && c != '.') {
                                int n = Integer.parseInt(r.substring(j, jj));
                                out += n;
                                if (c == '*') {
                                    int g = gears.get(k)[l];
                                    if (g == 0) gears.get(k)[l] = n;
                                    else out2 += g * n;
                                }
                                break outerLoop; // no occurences where a number is next to two symbols
                            }
                        }
                    }
                    j = jj;
                }
            }
        } 
        System.out.println(out);
        System.out.println(out2);
    }
}