package WEB.ban.sach.demo.dao;

import WEB.ban.sach.demo.entity.ChiTietDonHang;
import WEB.ban.sach.demo.entity.DonHang;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "don-hang")
public interface DonHangRepository extends JpaRepository<DonHang, Integer > {


}
