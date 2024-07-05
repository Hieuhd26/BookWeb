
import { useEffect, useState } from "react";
import { SachModel } from "../../models/SachModel";
import { HinhAnhModel } from "../../models/HinhAnhModel";
import { lay1AnhCuaMotSach, layToanBoAnh } from "../../api/HinhAnhApi";

interface CarouselItemInterface {
    sach: SachModel

}
export const CarouselItem: React.FC<CarouselItemInterface> = ({ sach }) => {
    const maSach = sach.maSach;

    const [danhSachAnh, setDanhSachAnh] = useState<HinhAnhModel[]>([]); // kieu du lieu sachModel
    const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
    const [baoLoi, setBaoLoi] = useState(null);


    useEffect(() => {
        lay1AnhCuaMotSach(maSach).then(
            anhData => {
                setDanhSachAnh(anhData);
                setDangTaiDuLieu(false);
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
        <div className="row align-items-center">
            <div className="col-5 text-center">
                <img src={danhSachAnh[0].duLieuAnh} className="float-end" style={{ width: '150px' }} />
            </div>
            <div className="col-7">
                <h5>{sach.tenSach}</h5>
                <p>{sach.moTa}</p>
            </div>
        </div>
    )
}
