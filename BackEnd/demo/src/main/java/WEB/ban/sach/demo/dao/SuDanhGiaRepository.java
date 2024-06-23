package WEB.ban.sach.demo.dao;

import WEB.ban.sach.demo.entity.HinhAnh;
import WEB.ban.sach.demo.entity.SuDanhGia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "su-danh-gia")
public interface SuDanhGiaRepository extends JpaRepository<SuDanhGia, Long > {
    // kiểu dữ liệu tham chiếu

}
