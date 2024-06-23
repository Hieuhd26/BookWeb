package WEB.ban.sach.demo.dao;

import WEB.ban.sach.demo.entity.ChiTietDonHang;
import WEB.ban.sach.demo.entity.HinhAnh;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "hinh-anh")
public interface HinhAnhRepository extends JpaRepository<HinhAnh, Integer > {
    // kiểu dữ liệu tham chiếu

}
