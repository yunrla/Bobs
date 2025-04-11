import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Yoon {
    private String previousJob = "공무원";
    private String desiredJob = "풀스택 개발자";
    private List<String> skills = new ArrayList<>();
    private Map<String, String> links = new HashMap<>();

    public Yoon() {
        skills.add("Java");
        skills.add("Spring");
        skills.add("React");
        skills.add("Oracle");

        links.put("GitHub", "github.com/yunrla");
        links.put("notion", "yoonlog.dev");
    }

    public void introduce() {
        System.out.println("안녕하세요! 저는 " + previousJob + "에서 " + desiredJob + "로 새로운 시작을을 준비 중인 Yoon입니다.");
        System.out.println("사용 기술: " + skills);
        System.out.println("포트폴리오: " + links);
    }


}