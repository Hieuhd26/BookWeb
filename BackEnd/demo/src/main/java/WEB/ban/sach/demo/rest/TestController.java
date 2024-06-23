package WEB.ban.sach.demo.rest;

import WEB.ban.sach.demo.dao.ChiTietDonHangRepository;
import WEB.ban.sach.demo.entity.ChiTietDonHang;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    private ChiTietDonHangRepository repository;
    @Autowired
    public TestController(ChiTietDonHangRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/")
    public void  test(){
        //repository.findById()

    }
}
