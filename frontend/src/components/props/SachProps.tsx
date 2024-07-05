
import { useEffect, useState } from "react";
import { SachModel } from "../../models/SachModel";
import { HinhAnhModel } from "../../models/HinhAnhModel";
import { layToanBoAnh } from "../../api/HinhAnhApi";

interface SachPropsInterface {
    sach: SachModel

}
export const SachProps: React.FC<SachPropsInterface> = ({ sach }) => {
    const maSach = sach.maSach;

    const [danhSachAnh, setDanhSachAnh] = useState<HinhAnhModel[]>([]); // kieu du lieu sachModel
    const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
    const [baoLoi, setBaoLoi] = useState(null);


    useEffect(() => {
        layToanBoAnh(maSach).then(
            anhData => {
                setDanhSachAnh(anhData);
                setDangTaiDuLieu(false);//m
            }
        ).catch(
            error => {
                setBaoLoi(error.message)
                setDangTaiDuLieu(false);
            }
        );

    }, []
    );

    if (dangTaiDuLieu) {
        return (
            <div>Đang tải dữ liệu</div>
        )
    }
    if (baoLoi) {
        return (
            <div>Gặp lỗi :{baoLoi}</div>

        )
    }

    return (
        <div className="col-md-3 mt-2">
            <div className="card">
                { danhSachAnh[0] && danhSachAnh[0].duLieuAnh &&
                    <img
                    src={danhSachAnh[0].duLieuAnh}
                    className="card-img-top"
                    alt={sach.tenSach}
                    style={{ height: '200px' }}
                />}
                <div className="card-body">
                    <h5 className="card-title">{sach.tenSach}</h5>
                    <p className="card-text">{sach.moTa}</p>
                    <div className="price">
                        <span className="original-price">
                            <del>{sach.giaNiemYet}</del>
                        </span>
                        <span className="discounted-price">
                            <strong>{sach.giaBan}</strong>
                        </span>
                    </div>
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            <a href="#" className="btn btn-secondary btn-block">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger btn-block">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
