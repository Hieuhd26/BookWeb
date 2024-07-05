
import { SachModel } from "../models/SachModel";

export async function request(endpoint: string) {
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error(`Không thể truy cập ${endpoint}`);
    }
    return response.json();
}

export async function laySach(duongDan: string): Promise<SachModel[]> {
    const ketQua: SachModel[] = [];
    const response = await request(duongDan);
    const responseData = response._embedded.saches;
 
    for (const key in responseData) {
            ketQua.push({
                maSach: responseData[key].maSach,
               tenSach: responseData[key].tenSach,
               giaBan: responseData[key].giaBan,
               giaNiemYet: responseData[key].giaNiemYet,
               moTa: responseData[key].moTa,
               soLuong: responseData[key].soLuong,
               tenTacGia: responseData[key].tenTacGia,
               trungBinhXepHang: responseData[key].trungBinhXepHang,
           });
        
        
    }
    return ketQua;
}

export async function layToanBoSach(): Promise<SachModel[]> {
   
    // Xác định endpoint
    const duongDan: string = 'http://localhost:8080/sach?sort=maSach,desc';

    return laySach(duongDan);

}
export async function lay3SachMoiNhat(): Promise<SachModel[]> {
   
    // Xác định endpoint
    const duongDan: string = 'http://localhost:8080/sach?sort=maSach,desc&page=0&size=3';

    return laySach(duongDan);

}