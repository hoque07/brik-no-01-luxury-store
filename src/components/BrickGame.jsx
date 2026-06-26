import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { RotateCcw, Sparkles, Trophy } from 'lucide-react'

const TARGET_SCORE = 10

function createBrick() {
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Math.random()),
    x: Math.floor(Math.random() * 88) + 3,
    y: -8,
    speed: Math.random() * 1.3 + 1.1,
    rotate: Math.floor(Math.random() * 50) - 25,
  }
}

export default function BrickGame({ onUnlock }) {
  const [score, setScore] = useState(0)
  const [bricks, setBricks] = useState([])
  const [running, setRunning] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const spawnRef = useRef(null)
  const moveRef = useRef(null)

  useEffect(() => {
    if (!running) return undefined

    spawnRef.current = setInterval(() => {
      setBricks((prev) => (prev.length >= 9 ? prev : [...prev, createBrick()]))
    }, 650)

    moveRef.current = setInterval(() => {
      setBricks((prev) =>
        prev
          .map((brick) => ({ ...brick, y: brick.y + brick.speed }))
          .filter((brick) => brick.y < 108),
      )
    }, 45)

    return () => {
      clearInterval(spawnRef.current)
      clearInterval(moveRef.current)
    }
  }, [running])


  function startGame() {
    setScore(0)
    setBricks([])
    setUnlocked(false)
    setRunning(true)
  }

  function restartGame() {
    setScore(0)
    setBricks([])
    setUnlocked(false)
    setRunning(false)
  }

  function catchBrick(id) {
    setScore((prev) => {
      const nextScore = Math.min(prev + 1, TARGET_SCORE)

      if (nextScore >= TARGET_SCORE) {
        setRunning(false)
        setUnlocked(true)
        setBricks([])
      } else {
        setBricks((prevBricks) => prevBricks.filter((brick) => brick.id !== id))
      }

      return nextScore
    })
  }

  return (
    <section className="game-section section" id="game">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-kicker">Interactive feature</span>
        <h2>Brick Catcher.</h2>
        <p>Catch 10 luxury bricks to unlock the Founder Edition. It works with mouse click and mobile tap.</p>
      </motion.div>

      <div className="game-panel glass-card">
        <div className="game-topbar">
          <div>
            <p className="game-label">Score</p>
            <strong>{score} / {TARGET_SCORE}</strong>
          </div>
          <div className="game-controls">
            <button className="btn btn-primary" onClick={startGame} disabled={running}>
              <Sparkles size={17} /> Start
            </button>
            <button className="btn btn-ghost" onClick={restartGame}>
              <RotateCcw size={17} /> Restart
            </button>
          </div>
        </div>

        <div className="game-box" role="application" aria-label="Brick Catcher Game Area">
          {!running && !unlocked && (
            <div className="game-empty">
              <Trophy size={40} />
              <h3>Ready to unlock?</h3>
              <p>Press Start, then click the falling bricks.</p>
            </div>
          )}

          {bricks.map((brick) => (
            <button
              key={brick.id}
              className="falling-brick"
              style={{ left: `${brick.x}%`, top: `${brick.y}%`, transform: `rotate(${brick.rotate}deg)` }}
              onClick={() => catchBrick(brick.id)}
              aria-label="Catch brick"
            />
          ))}

          {unlocked && (
            <motion.div
              className="unlock-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Trophy size={42} />
              <h3>Founder Edition Unlocked</h3>
              <p>You completed the interactive experience.</p>
              <button className="btn btn-primary" onClick={onUnlock}>Claim Founder Edition</button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
