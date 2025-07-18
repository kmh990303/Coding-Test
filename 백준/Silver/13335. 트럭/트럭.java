import java.util.*;


public class Main {
    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);

       int n = sc.nextInt();
       int w = sc.nextInt();
       int l = sc.nextInt();

       Queue<Integer> trucks = new LinkedList<>();
       for (int i = 0; i < n; i++) {
           trucks.add(sc.nextInt());
       }

       Queue<Integer> bridge = new LinkedList<>();
       int time = 0;
       int curWeight = 0;

       for (int i = 0; i < w; i++) {
           bridge.add(0);
       }

       while (!trucks.isEmpty() || curWeight > 0) {
           time++;

           int exited = bridge.poll();
           curWeight -= exited;

           if (!trucks.isEmpty()) {
               if (curWeight + trucks.peek() <= l) {
                   int next = trucks.poll();
                   bridge.add(next);
                   curWeight += next;
               } else {
                   bridge.add(0);
               }
           } else {
               bridge.add(0);
           }
       }

       System.out.println(time);
    }
}
