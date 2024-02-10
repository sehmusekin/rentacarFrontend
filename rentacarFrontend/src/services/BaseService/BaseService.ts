import { AxiosResponse } from "axios";
import axiosInstance from "../../core/interceptors/axiosInterceptors";

export class BaseService<
  GetAllType,
  GetByIdType,
  AddRequestType,
  UpdateRequestType,
  UpdateResponseType
> {
  public apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = "";
  }

  getAll(): Promise<AxiosResponse<GetAllType, any>> {
    return axiosInstance.get(this.apiUrl);
  }

  getById(id: number): Promise<AxiosResponse<GetByIdType, any>> {
    return axiosInstance.get<GetByIdType>(`${this.apiUrl}/${id}`);
  }

  add(request: AddRequestType): Promise<AxiosResponse<AddRequestType, any>> {
    return axiosInstance.post<AddRequestType>(this.apiUrl, request);
  }

  update(
    request: UpdateRequestType
  ): Promise<AxiosResponse<UpdateResponseType, any>> {
    return axiosInstance.put<UpdateResponseType>(this.apiUrl, request);
  }

  delete(id: number): Promise<AxiosResponse<null, any>> {
    return axiosInstance.delete(`${this.apiUrl}/${id}`);
  }
}
