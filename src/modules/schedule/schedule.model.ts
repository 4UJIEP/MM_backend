// schedule.model.ts
// group, study_room, group_child, reserve_application, course_teacher mappings (частично)
import type { UUID } from '../users/user.model';

export interface StudyRoom {
  id: UUID;
  numberRoom?: number | null; // number_room
  isMultimedia?: boolean | null;
  maxStudents?: number | null;
  countPC?: number | null; // В SQL "count PC" — преобразовать в countPC
  address?: string | null;
}

export interface Group {
  id: UUID;
  courseId?: UUID | null; // FK -> course.id
  courseDirectionId?: UUID | null; // FK -> (course_direction)
  year?: string | null; // date in SQL; можно хранить как ISO date or year string
  dayOfWeek?: string | null;
  timeSet?: string | null;
  closureDate?: string | null;

  // optional populated relations:
  // course?: Course (courses.model)
  // studyRooms?: StudyRoom[] (через course_teacher)
}

export interface GroupChild {
  id: UUID;
  groupId: UUID; // FK -> group.id
  childId: UUID; // FK -> child.id
  applicationDate?: string | null;

  // optional populated:
  // group?: Group
  // child?: Child
}

export interface ReserveApplication {
  id: UUID;
  groupId?: UUID | null; // FK -> group.id
  childId?: UUID | null; // FK -> child.id
  groupName?: string | null;
}
