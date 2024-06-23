package WEB.ban.sach.demo.dao;

import WEB.ban.sach.demo.entity.HinhAnh;
import WEB.ban.sach.demo.entity.SachYeuThich;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "sach-yeu-thich")
public interface SachYeuThichRepository extends JpaRepository<SachYeuThich, Integer > {
    // kiểu dữ liệu tham chiếu

}
