import java.util.*;


public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n1 = sc.nextInt();
        int n2 = sc.nextInt();

        System.out.println(getGcd(n1, n2));
        System.out.println(getLcm(n1, n2));
    }

    public static int getGcd(int a, int b) {
        if (b == 0) return a;
        return getGcd(b, a % b);
    }

    public static int getLcm(int a, int b) {
        return a * b / getGcd(a, b);
    }
}
