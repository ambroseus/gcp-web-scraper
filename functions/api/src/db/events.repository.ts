import { db } from './index'
import { EventData } from '../dtos/event.data'

export class EventsRepository {
  private collection: FirebaseFirestore.CollectionReference

  constructor() {
    this.collection = db.collection('events')
  }

  getById = async (id: string): Promise<EventData> => {
    const event = await this.collection.doc(id).get()

    if (!event.exists) {
      return null
    }

    return {
      id: event.id,
      ...event.data(),
    }
  }
}
