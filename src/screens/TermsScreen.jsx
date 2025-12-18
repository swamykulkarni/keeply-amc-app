import './TermsScreen.css'

function TermsScreen({ onAccept, onBack }) {
  return (
    <div className="terms-screen">
      <div className="terms-header">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        
        <div className="greeting">
          <h2>Hello 👋</h2>
          <p>Before you create an account, please read and accept our Terms and Conditions.</p>
        </div>
      </div>

      <div className="terms-content">
        <div className="terms-card">
          <h3>Term & Condition</h3>
          <p className="last-updated">Last updated: 09, September, 2025</p>
          
          <div className="terms-text">
            <p>
              Welcome to Keeply! These terms and conditions outline the rules and regulations 
              for the use of Keeply's AMC tracking application.
            </p>
            
            <h4>1. Account</h4>
            <p>
              When you create an account with us, you must provide information that is 
              accurate, complete, and current at all times. You are responsible for 
              safeguarding the password and for all activities that occur under your account.
            </p>
            
            <h4>2. Service Usage</h4>
            <p>
              Keeply provides Annual Maintenance Contract tracking services for home appliances. 
              You may use our service to track AMC dates, receive notifications, and manage 
              your appliance maintenance schedules.
            </p>
            
            <h4>3. Data Privacy</h4>
            <p>
              We collect and process your personal data in accordance with our Privacy Policy. 
              Your appliance data and AMC information are stored securely and used only to 
              provide our services.
            </p>
            
            <h4>4. User Responsibilities</h4>
            <p>
              You agree to provide accurate appliance information and AMC details. You are 
              responsible for keeping your account information up to date and for maintaining 
              the security of your account credentials.
            </p>
            
            <h4>5. Service Availability</h4>
            <p>
              We strive to maintain service availability but cannot guarantee uninterrupted 
              access. We reserve the right to modify or discontinue services with appropriate notice.
            </p>
            
            <h4>6. Limitation of Liability</h4>
            <p>
              Keeply is not liable for any missed AMC dates or maintenance schedules. 
              Our service is a reminder tool, and users are ultimately responsible for 
              their appliance maintenance.
            </p>
          </div>
        </div>
      </div>

      <button className="agree-btn" onClick={onAccept}>
        Agree & Continue
      </button>
    </div>
  )
}

export default TermsScreen