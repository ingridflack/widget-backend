import { prisma } from "../../prisma";
import {
  FeedbacksRepository,
  FeedbackCreateData,
} from "../feedbacks-repository";

// https://medium.com/@erickwendel/generic-repository-with-typescript-and-node-js-731c10a1b98e#:~:text=Talking%20about%20the%20Repository%20pattern,have%20more%20one%20database%2C%20or
export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
