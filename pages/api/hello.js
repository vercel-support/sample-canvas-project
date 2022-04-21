import { createCanvas } from 'canvas';

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'Testing' })
}
