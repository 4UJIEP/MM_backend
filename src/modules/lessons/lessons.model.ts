// lessons.model.ts
// lesson, attendance, assistant_attendance
import type { UUID } from '../users/user.model';

export interface Lesson {
  id: UUID;
  groupId?: UUID | null; // FK -> group.id
  lessonDate?: string | null; // ISO date
  lessonTopic?: string | null;
  homework?: string | null;
  materialsUrl?: string | null;
  comment?: string | null;

  // optional populated relations:
  // group?: Group (schedule.model)
}

export interface Attendance {
  id: UUID;
  lessonId: UUID; // FK -> lesson.id
  courseChildId?: UUID | null; // В SQL — course_child_id; возможно соответствует group_child.id
  isPresent?: boolean; // default false
  comment?: string | null;

  // optional populated relations:
  // lesson?: Lesson
  // courseChild?: CourseChild / GroupChild (grades.model / schedule.model)
}

export interface AssistantAttendance {
  id: UUID;
  lessonId: UUID; // FK -> lesson.id
  courseTeacherId?: UUID | null; // FK -> course_teacher.id
  isPresent?: boolean; // default false
  comment?: string | null;

  // optional populated relations:
  // lesson?: Lesson
  // courseTeacher?: CourseTeacher (courses.model)
}
