import { useEffect, useState } from "react"
import { SachModel } from "../models/SachModel";
import { SachProps } from "./props/SachProps";
import { layToanBoSach } from "../api/SachApi";




export const DanhSachSanPham: React.FC = () => {
    const [danhSachSanPham, setDanhSachSanPham] = useState<SachModel[]>([]); // kieu du lieu sachModel
    const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
    const [baoLoi, setBaoLoi] = useState(null);


    useEffect(() => {
        layToanBoSach().then(
            sachData =>{
                setDanhSachSanPham(sachData);
                setDangTaiDuLieu(false);
            }
        ).catch(
            error =>{
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
        <div className='container'>
            <div className='row mt-4'>
                {
                    danhSachSanPham.map(sach => <SachProps
                        key={sach.maSach}
                          sach={sach} />)
                }
            </div>

        </div>
    )
}
