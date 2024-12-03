import { BaseModel } from "src/frontend/app/core/models/base.model";

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface Session {
  user: {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
  };
} 