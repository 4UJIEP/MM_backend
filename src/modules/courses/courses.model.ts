// courses.model.ts
// Course and related mapping tables: course, course_teacher, (course_direction referenced from group)
// Явные FK в SQL: course -> group, course_teacher -> teacher_position, group -> course

import type { UUID } from '../users/user.model';

export interface Course {
  id: UUID;
  nameCourse?: string | null;
  minClass?: number | null;
  maxClass?: number | null;
  maxStudents?: number | null;
  description?: string | null;
}

export interface CourseDirection {
  // В SQL есть поле course_direction_id в group, но таблицы course_direction нет в схеме.
  // Если у вас есть отдельная таблица, переопределите. Здесь — опциональная модель.
  id: UUID;
  name?: string | null;
}

export interface CourseTeacher {
  id: UUID;
  teacherPositionId?: UUID | null; // teacher_posision_id (FK -> teacher_position.id)
  groupId?: UUID | null; // FK -> group.id
  studyRoomId?: UUID | null; // FK -> study_room.id

  // optional populated relations (подгружать при необходимости)
  // teacherPosition?: TeacherPosition (из users.model)
  // group?: Group (из schedule.model)
  // studyRoom?: StudyRoom (из schedule.model)
}
