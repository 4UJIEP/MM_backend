// auth.model.ts
// Учетные записи (credentials) для родителей и учителей.
// В SQL: parent_user, teacher_user

import type { UUID } from '../users/user.model';

export interface ParentUser {
  id: UUID; // id учетной записи
  parentId: UUID; // FK -> parent.id
  username: string;
  password: string; // хеш пароля
  tempPassword?: boolean; // default true
}

export interface TeacherUser {
  id: UUID;
  teacherId: UUID; // FK -> teacher.id
  username: string;
  password: string; // хеш
  tempPassword?: boolean;
}

// Общие типы для аутентификации/авторизации
export interface JwtPayload {
  sub: UUID; // id пользователя (parent или teacher)
  role: 'parent' | 'teacher' | 'admin' | string;
  iat?: number;
  exp?: number;
}
