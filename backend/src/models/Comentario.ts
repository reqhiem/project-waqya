import { Schema, model } from 'mongoose';

const ComentarioSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    content: {
      type: String,
      required: true,
    },
    numLikes: {
      type: Number,
      default: 0,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model('Comentario', ComentarioSchema);
