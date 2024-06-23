package WEB.ban.sach.demo.entity;

import jakarta.persistence.*;
import lombok.Data;
@Entity
@Table(name = "chi_tiet_don_hang")
@Data
public class ChiTietDonHang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chi_tiet_don_hang")
    private long chiTietDonHang;

    @ManyToOne(cascade = {
            CascadeType.DETACH, CascadeType.PERSIST,
            CascadeType.REFRESH, CascadeType.MERGE
    })
    @JoinColumn(name = "ma_sach", nullable = false)
    private Sach sach;

    @Column(name = "so_luong")
    private int soLuong;

    @Column(name = "gia_ban")
    private double giaBan;

    @ManyToOne(cascade = {
            CascadeType.DETACH, CascadeType.PERSIST,
            CascadeType.REFRESH, CascadeType.MERGE
    })
    @JoinColumn(name = "ma_don_hang", nullable = false)
    private DonHang donHang;
}
