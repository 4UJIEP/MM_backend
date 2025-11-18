// grades.model.ts
// В схеме SQL явных таблиц для оценок нет — добавляю рекомендованные интерфейсы, совместимые с вашей схемой.
// Использует связь с group_child (CourseChild) и lesson/attendance

import type { UUID } from '../users/user.model';

export interface CourseChild {
  // В SQL есть group_child — это запись о ребёнке в группе.
  // Здесь даём удобный тип-алиас для использования в модуле оценок.
  id: UUID;
  groupId: UUID;
  childId: UUID;
  applicationDate?: string | null;
}

export interface Grade {
  id: UUID;
  courseChildId: UUID; // FK -> CourseChild.id (group_child.id)
  lessonId?: UUID | null; // FK -> lesson.id (опционально, если оценка по уроку)
  value: number | string; // числовая оценка или строковая (например "A", "pass")
  comment?: string | null;
  createdAt?: string | null; // ISO datetime
  teacherId?: UUID | null; // Кто выставил оценку (teacher.id)

  // optional populated relations:
  // courseChild?: CourseChild
  // lesson?: Lesson
  // teacher?: Teacher
}
