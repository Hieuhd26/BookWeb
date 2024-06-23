package WEB.ban.sach.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "hinh_anh")
public class HinhAnh {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_hinh_anh")
    private int maHinhAnh;

    @Column(name = "ten_hinh_anh", length = 256)
    private String tenHinhAnh;

    @Column(name = "la_icon")  // tiny int
    private  boolean laIcon;

    @Column(name = "duong_dan")
    private String duongDan;

    @Column(name = "du_lieu_anh",columnDefinition = "LONGTEXT")// lưu hình ảnh
    @Lob
    private String duLieuAnh; // luu dang base64
    // Blob co the luu nang, String luu nhe

    @ManyToOne(cascade = {
            CascadeType.DETACH, CascadeType.PERSIST,
            CascadeType.REFRESH, CascadeType.MERGE
    })
    @JoinColumn(name = "ma_sach", nullable = false)//ko the de sach null
    // hinh anh ton tai phai dua tren mot cuon sach
    private Sach sach;

}
