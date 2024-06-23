package WEB.ban.sach.demo.dao;

import WEB.ban.sach.demo.entity.HinhAnh;
import WEB.ban.sach.demo.entity.TheLoai;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "the-loai")
public interface TheLoaiRepository extends JpaRepository<TheLoai, Integer > {


}
