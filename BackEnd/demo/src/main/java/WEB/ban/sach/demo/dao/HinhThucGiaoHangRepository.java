package WEB.ban.sach.demo.dao;

import WEB.ban.sach.demo.entity.HinhAnh;
import WEB.ban.sach.demo.entity.HinhThucGiaoHang;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "hinh-thuc-giao-hang")
public interface HinhThucGiaoHangRepository extends JpaRepository<HinhThucGiaoHang, Integer > {
    // kiểu dữ liệu tham chiếu

}
