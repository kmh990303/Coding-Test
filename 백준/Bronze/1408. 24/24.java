import java.util.*;


public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String time1 = sc.next();
        String time2 = sc.next();

        String[] parts1 = time1.split(":");
        String[] parts2 = time2.split(":");

        int totalTime1 = 3600 * Integer.parseInt(parts1[0])
                + 60 * Integer.parseInt(parts1[1])
                + Integer.parseInt(parts1[2]);
        int totalTime2 = 3600 * Integer.parseInt(parts2[0])
                + 60 * Integer.parseInt(parts2[1])
                + Integer.parseInt(parts2[2]);

        int diff = totalTime2 - totalTime1;
        
        if (diff < 0) {
            diff += 2400 * 36;
        }

        int h = diff / 3600;
        int m = diff % 3600 / 60;
        int s = diff % 60;

        System.out.println(String.format("%02d:%02d:%02d", h, m, s));
    }
}
