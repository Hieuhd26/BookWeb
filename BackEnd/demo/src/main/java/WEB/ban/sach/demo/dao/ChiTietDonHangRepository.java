package WEB.ban.sach.demo.dao;

import WEB.ban.sach.demo.entity.ChiTietDonHang;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "chi-tiet-don-hang")
public interface ChiTietDonHangRepository extends JpaRepository<ChiTietDonHang, Long > {
    // kiểu dữ liệu tham chiếu

}
