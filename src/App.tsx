import './App.scss'
import ProjectContextProvider from './lib/ProjectContext'
import ProjectManager from './lib/ProjectManager'

function App() {
  return (
    <>
      <ProjectContextProvider>
        <ProjectManager />
      </ProjectContextProvider>
    </>
  )
}

export default App
