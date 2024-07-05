
import { HinhAnhModel } from "../models/HinhAnhModel";

export async function request(endpoint: string) {
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error(`Không thể truy cập ${endpoint}`);
    }
    return response.json();
}

export async function layAnhMotSach(duongDan: string): Promise<HinhAnhModel[]> {
    const ketQua: HinhAnhModel[] = [];
    const response = await request(duongDan);
    const responseData = response._embedded.hinhAnhs;
    for (const iterator of responseData) {
        ketQua.push({
            maHinhAnh: iterator.maHinhAnh,
            tenHinhAnh: iterator.tenHinhAnh,
            laIcon: iterator.laIcon,
            duongDan: iterator.duongDan,
            duLieuAnh: iterator.duLieuAnh
        });
    }
    return ketQua;

}


export async function layToanBoAnh(maSach: number): Promise<HinhAnhModel[]> {

    const duongDan: string = `http://localhost:8080/sach/${maSach}/danhSachHinhAnh`;
    return layAnhMotSach(duongDan);

}
export async function lay1AnhCuaMotSach(maSach: number): Promise<HinhAnhModel[]> {
    const duongDan: string = `http://localhost:8080/sach/${maSach}/danhSachHinhAnh?sort=maHinhAnh,asc&page=0&size=1`;
 
    return layAnhMotSach(duongDan);
 }