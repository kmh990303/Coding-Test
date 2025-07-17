import java.util.*;

class Person {
    String name;
    int day;
    int month;
    int year;

    public Person(String name, int day, int month, int year) {
        this.name = name;
        this.day = day;
        this.month = month;
        this.year = year;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        List<Person> list = new ArrayList<>();

        for(int i = 0; i < n; i++) {
            String name = sc.next();
            int day = sc.nextInt();
            int month = sc.nextInt();
            int year = sc.nextInt();

            list.add(new Person(name, day, month, year));
        }

        list.sort((a, b) -> {
            if (a.year != b.year) return a.year - b.year;
            if(a.month != b.month) return a.month - b.month;
            return a.day - b.day;
        });

        System.out.println(list.get(list.size() - 1).name);
        System.out.println(list.get(0).name);

    }
}
