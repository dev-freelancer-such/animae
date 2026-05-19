export interface RequestOptionsInterface {
  data?: object;
  params?: object;
  isFormData?: boolean;
  enableFlashMessageSuccess?: boolean;
  enableFlashMessageError?: boolean;
}

export interface PaginationParamsInterface {
  page?: number;
  page_size?: number;
  search?: string;
  sort?: string;
  filter?: string;
}
