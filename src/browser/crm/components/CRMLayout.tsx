import * as React from "react"
import { ActivityBar } from "./activity-bar/ActivityBar"
import { Header } from "./ui/header"
import { CopilotChat } from "./copilot/CopilotChat"
import { Dashboard } from "./home/Dashboard"
import { cn } from "../lib/utils"

interface CRMLayoutProps {
  className?: string
}

export function CRMLayout({ className }: CRMLayoutProps) {
  const [activeItem, setActiveItem] = React.useState("copilot")
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId)
  }

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    // In a real implementation, you would also update the document class
    // document.documentElement.classList.toggle('dark', !isDarkMode)
  }

  const renderContent = () => {
    switch (activeItem) {
      case "copilot":
        return <CopilotChat className="crm-h-full" />
      case "home":
        return <Dashboard />
      case "dialer":
        return (
          <div className="crm-flex crm-items-center crm-justify-center crm-h-full">
            <p className="crm-text-muted-foreground">VOIP Dialer - Coming Soon</p>
          </div>
        )
      case "campaigns":
        return (
          <div className="crm-flex crm-items-center crm-justify-center crm-h-full">
            <p className="crm-text-muted-foreground">Campaigns - Coming Soon</p>
          </div>
        )
      case "agent-studio":
        return (
          <div className="crm-flex crm-items-center crm-justify-center crm-h-full">
            <p className="crm-text-muted-foreground">Agent Studio - Coming Soon</p>
          </div>
        )
      case "settings":
        return (
          <div className="crm-flex crm-items-center crm-justify-center crm-h-full">
            <p className="crm-text-muted-foreground">Settings - Coming Soon</p>
          </div>
        )
      default:
        return <CopilotChat className="crm-h-full" />
    }
  }

  return (
    <div className={cn("crm-container", isDarkMode && "dark", className)}>
      {/* Header */}
      <Header 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={handleToggleDarkMode}
      />

      {/* Main Content */}
      <div className="crm-main-content">
        {/* Activity Bar */}
        <ActivityBar 
          activeItem={activeItem} 
          onItemClick={handleItemClick}
        />

        {/* Content Area */}
        <div className="crm-content-area">
          <div className="crm-page-content">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
}