// assistants.model.ts
// В SQL есть таблица assistant_attendance — посещаемость ассистента на уроке.
// В схеме нет отдельной сущности assistant, поэтому в модели — запись присутствия ассистента.

import type { UUID } from '../users/user.model';

export interface AssistantAttendance {
  id: UUID;
  lessonId: UUID; // FK -> lesson.id
  courseTeacherId?: UUID | null; // FK -> course_teacher.id (ссылка на запись в course_teacher)
  isPresent?: boolean;
  comment?: string | null;

  // optional populated relations:
  // lesson?: Lesson (lessons.model)
  // courseTeacher?: CourseTeacher (courses.model)
}
