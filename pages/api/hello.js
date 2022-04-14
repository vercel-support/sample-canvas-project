import { createCanvas } from 'canvas';

export default (req, res) => {
  res.status(200).json({ projectBuildsButFailsToRunOnVercel: true })
}
