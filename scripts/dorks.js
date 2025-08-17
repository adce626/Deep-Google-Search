// Google Dorks Database
const GOOGLE_DORKS = {
    sensitive: {
        title: "Sensitive Files & Data",
        icon: "fas fa-file-lock",
        description: "Discover sensitive files, configurations, and leaked data",
        dorks: [
            {
                query: 'site:example.com -www -shop -share -ir -mfa',
                description: 'Broad domain search with negative filters'
            },
            {
                query: 'site:example.com ext:php inurl:?',
                description: 'PHP files with parameters'
            },
            {
                query: 'site:"example.com" ext:log | ext:txt | ext:conf | ext:cnf | ext:ini | ext:env | ext:sh | ext:bak | ext:backup | ext:swp | ext:old | ext:~ | ext:git | ext:svn | ext:htpasswd | ext:htaccess | ext:json',
                description: 'Configuration files and backups'
            },
            {
                query: 'site:example.com ext:txt | ext:pdf | ext:xml | ext:xls | ext:xlsx | ext:ppt | ext:pptx | ext:doc | ext:docx intext:"confidential" | intext:"Not for Public Release" | intext:"internal use only" | intext:"do not distribute"',
                description: 'Confidential documents'
            },
            {
                query: 'inurl:email= | inurl:phone= | inurl:password= | inurl:secret= inurl:& site:example.com',
                description: 'Sensitive parameters in URLs'
            },
            {
                query: 'site:example.com filetype:sql | filetype:db | filetype:dbf | filetype:mdb',
                description: 'Database files'
            },
            {
                query: 'site:example.com inurl:"/wp-config.php" | inurl:"/.env" | inurl:"/config/"',
                description: 'WordPress and application configuration files'
            },
            {
                query: 'site:example.com "index of" | "parent directory" | "directory listing"',
                description: 'Directory listings'
            }
        ]
    },
    vulnerabilities: {
        title: "Vulnerability Parameters",
        icon: "fas fa-shield-virus",
        description: "Parameters commonly vulnerable to injection attacks",
        dorks: [
            {
                query: 'inurl:q= | inurl:s= | inurl:search= | inurl:query= | inurl:keyword= | inurl:lang= inurl:& site:example.com',
                description: 'XSS prone parameters'
            },
            {
                query: 'inurl:url= | inurl:return= | inurl:next= | inurl:redirect= | inurl:redir= | inurl:ret= | inurl:r2= | inurl:page= inurl:& inurl:http site:example.com',
                description: 'Open Redirect prone parameters'
            },
            {
                query: 'inurl:id= | inurl:pid= | inurl:category= | inurl:cat= | inurl:action= | inurl:sid= | inurl:dir= inurl:& site:example.com',
                description: 'SQL Injection prone parameters'
            },
            {
                query: 'inurl:http | inurl:url= | inurl:path= | inurl:dest= | inurl:html= | inurl:data= | inurl:domain= | inurl:page= inurl:& site:example.com',
                description: 'SSRF prone parameters'
            },
            {
                query: 'inurl:include | inurl:dir | inurl:detail= | inurl:file= | inurl:folder= | inurl:inc= | inurl:locate= | inurl:doc= | inurl:conf= inurl:& site:example.com',
                description: 'LFI prone parameters'
            },
            {
                query: 'inurl:cmd | inurl:exec= | inurl:query= | inurl:code= | inurl:do= | inurl:run= | inurl:read= | inurl:ping= inurl:& site:example.com',
                description: 'RCE prone parameters'
            },
            {
                query: 'site:example.com intext:"sql syntax near" | intext:"syntax error has occurred" | intext:"incorrect syntax near" | intext:"unexpected end of SQL command" | intext:"Warning: mysql_connect()" | intext:"Warning: mysql_query()" | intext:"Warning: pg_connect()"',
                description: 'SQL error messages'
            },
            {
                query: 'site:example.com intext:"Warning: include(" | intext:"Warning: require_once(" | intext:"Warning: require(" | intext:"Warning: include_once(" | intext:"failed to open stream"',
                description: 'PHP inclusion errors'
            }
        ]
    },
    endpoints: {
        title: "API Endpoints & Services",
        icon: "fas fa-plug",
        description: "API endpoints, REST services, and web services",
        dorks: [
            {
                query: 'site:example.com inurl:api | site:*/rest | site:*/v1 | site:*/v2 | site:*/v3',
                description: 'API endpoints'
            },
            {
                query: 'inurl:apidocs | inurl:api-docs | inurl:swagger | inurl:api-explorer site:"example.com"',
                description: 'API documentation'
            },
            {
                query: 'site:example.com inurl:"/graphql" | inurl:"/graphiql"',
                description: 'GraphQL endpoints'
            },
            {
                query: 'site:example.com filetype:wsdl | inurl:wsdl',
                description: 'SOAP services'
            },
            {
                query: 'site:example.com inurl:"/api/v" | inurl:"/rest/v" | inurl:"/service/v"',
                description: 'Versioned APIs'
            },
            {
                query: 'site:example.com intext:"api key" | intext:"api_key" | intext:"apikey"',
                description: 'API key references'
            },
            {
                query: 'site:example.com inurl:"/oauth" | inurl:"/auth" | inurl:"/token"',
                description: 'Authentication endpoints'
            },
            {
                query: 'site:example.com inurl:"/webhook" | inurl:"/callback"',
                description: 'Webhook endpoints'
            }
        ]
    },
    errors: {
        title: "Server Errors & Exceptions",
        icon: "fas fa-exclamation-triangle",
        description: "Server errors, exceptions, and debug information",
        dorks: [
            {
                query: 'inurl:"error" | intitle:"exception" | intitle:"failure" | intitle:"server at" | inurl:exception | "database error" | "SQL syntax" | "undefined index" | "unhandled exception" | "stack trace" site:example.com',
                description: 'General server errors'
            },
            {
                query: 'site:example.com "Fatal error:" | "Parse error:" | "Warning:" | "Notice:"',
                description: 'PHP errors'
            },
            {
                query: 'site:example.com "Server Error" | "Runtime Error" | "Microsoft OLE DB Provider" | "ASP.NET" | "Active Server Pages"',
                description: 'ASP.NET errors'
            },
            {
                query: 'site:example.com "java.lang." | "java.util." | "java.io." | "Exception in thread"',
                description: 'Java exceptions'
            },
            {
                query: 'site:example.com "Traceback" | "NameError" | "TypeError" | "ValueError" | "AttributeError"',
                description: 'Python errors'
            },
            {
                query: 'site:example.com "ORA-" | "PLS-" | "TNS-" | "SP2-"',
                description: 'Oracle database errors'
            },
            {
                query: 'site:example.com intitle:"500 Internal Server Error" | intitle:"404 Not Found" | intitle:"403 Forbidden"',
                description: 'HTTP error pages'
            },
            {
                query: 'site:example.com "DEBUG" | "TRACE" | "ERROR" | "WARN" | "INFO" filetype:log',
                description: 'Log files'
            }
        ]
    },
    admin: {
        title: "Admin Panels & Login Pages",
        icon: "fas fa-user-shield",
        description: "Administrative interfaces and authentication pages",
        dorks: [
            {
                query: 'inurl:login | inurl:signin | intitle:login | intitle:signin | inurl:secure site:example.com',
                description: 'Login pages'
            },
            {
                query: 'site:example.com inurl:admin | inurl:administrator | inurl:wp-admin | inurl:phpmyadmin',
                description: 'Admin panels'
            },
            {
                query: 'site:example.com inurl:"/control" | inurl:"/panel" | inurl:"/dashboard" | inurl:"/manage"',
                description: 'Control panels'
            },
            {
                query: 'site:example.com "choose file" | "select file" | "upload file"',
                description: 'File upload pages'
            },
            {
                query: 'site:example.com intitle:"Admin" | intitle:"Administrator" | intitle:"Control Panel"',
                description: 'Admin page titles'
            },
            {
                query: 'site:example.com inurl:"/wp-login.php" | inurl:"/wp-admin/" | inurl:"/administrator/"',
                description: 'CMS admin areas'
            },
            {
                query: 'site:example.com intext:"forgot password" | intext:"reset password" | intext:"change password"',
                description: 'Password reset pages'
            },
            {
                query: 'site:example.com inurl:"/cgi-bin/" | inurl:"/scripts/" | inurl:"/bin/"',
                description: 'CGI and script directories'
            }
        ]
    },
    cloud: {
        title: "Cloud Storage & Services",
        icon: "fas fa-cloud",
        description: "Cloud storage buckets and online services",
        dorks: [
            {
                query: 'site:s3.amazonaws.com "example.com"',
                description: 'AWS S3 buckets'
            },
            {
                query: 'site:blob.core.windows.net "example.com"',
                description: 'Azure Blob storage'
            },
            {
                query: 'site:googleapis.com "example.com"',
                description: 'Google Cloud storage'
            },
            {
                query: 'site:drive.google.com "example.com"',
                description: 'Google Drive files'
            },
            {
                query: 'site:dropbox.com/s "example.com"',
                description: 'Dropbox shared files'
            },
            {
                query: 'site:box.com/s "example.com"',
                description: 'Box.com shared files'
            },
            {
                query: 'site:docs.google.com inurl:"/d/" "example.com"',
                description: 'Google Docs'
            },
            {
                query: 'site:firebaseio.com "example.com"',
                description: 'Firebase databases'
            },
            {
                query: 'site:digitaloceanspaces.com "example.com"',
                description: 'DigitalOcean Spaces'
            },
            {
                query: 'site:sharepoint.com "example.com"',
                description: 'SharePoint sites'
            },
            {
                query: 'site:onedrive.live.com "example.com"',
                description: 'OneDrive files'
            },
            {
                query: 'site:dev.azure.com "example.com"',
                description: 'Azure DevOps'
            }
        ]
    },
    code: {
        title: "Code Leaks & Repositories",
        icon: "fas fa-code",
        description: "Source code leaks and development platforms",
        dorks: [
            {
                query: 'site:pastebin.com "example.com"',
                description: 'Pastebin leaks'
            },
            {
                query: 'site:github.com "example.com"',
                description: 'GitHub repositories'
            },
            {
                query: 'site:gitlab.com "example.com"',
                description: 'GitLab repositories'
            },
            {
                query: 'site:bitbucket.org "example.com"',
                description: 'Bitbucket repositories'
            },
            {
                query: 'site:jsfiddle.net "example.com"',
                description: 'JSFiddle code'
            },
            {
                query: 'site:codepen.io "example.com"',
                description: 'CodePen projects'
            },
            {
                query: 'site:codebeautify.org "example.com"',
                description: 'Code beautifier'
            },
            {
                query: 'site:repl.it "example.com"',
                description: 'Replit projects'
            },
            {
                query: 'site:stackoverflow.com "example.com"',
                description: 'Stack Overflow mentions'
            },
            {
                query: 'site:gist.github.com "example.com"',
                description: 'GitHub Gists'
            },
            {
                query: 'site:npmjs.com "example.com"',
                description: 'NPM packages'
            },
            {
                query: 'site:packagist.org "example.com"',
                description: 'Composer packages'
            }
        ]
    },
    infrastructure: {
        title: "Infrastructure & Services",
        icon: "fas fa-server",
        description: "Server infrastructure and service discovery",
        dorks: [
            {
                query: 'inurl:test | inurl:env | inurl:dev | inurl:staging | inurl:sandbox | inurl:debug | inurl:temp | inurl:internal | inurl:demo site:example.com',
                description: 'Development environments'
            },
            {
                query: 'site:example.com inurl:"/server-status" | inurl:"/server-info"',
                description: 'Apache server status'
            },
            {
                query: 'site:example.com intitle:"phpinfo()" | intext:"phpinfo()"',
                description: 'PHP info pages'
            },
            {
                query: 'site:example.com inurl:"/phpmyadmin" | inurl:"/pma" | inurl:"/dbadmin"',
                description: 'Database admin tools'
            },
            {
                query: 'site:example.com inurl:"/jenkins" | inurl:"/ci" | inurl:"/build"',
                description: 'CI/CD systems'
            },
            {
                query: 'site:example.com inurl:"/monitoring" | inurl:"/stats" | inurl:"/metrics"',
                description: 'Monitoring systems'
            },
            {
                query: 'site:example.com inurl:"/docker" | inurl:"/kubernetes" | inurl:"/k8s"',
                description: 'Container services'
            },
            {
                query: 'site:example.com filetype:yaml | filetype:yml | filetype:json intext:"password" | intext:"key" | intext:"token"',
                description: 'Configuration files with secrets'
            }
        ]
    },
    social: {
        title: "Social Media & Public Info",
        icon: "fas fa-share-alt",
        description: "Social media mentions and public information",
        dorks: [
            {
                query: 'site:groups.google.com "example.com"',
                description: 'Google Groups'
            },
            {
                query: 'site:reddit.com "example.com"',
                description: 'Reddit mentions'
            },
            {
                query: 'site:twitter.com "example.com"',
                description: 'Twitter mentions'
            },
            {
                query: 'site:linkedin.com "example.com"',
                description: 'LinkedIn profiles'
            },
            {
                query: 'site:facebook.com "example.com"',
                description: 'Facebook pages'
            },
            {
                query: 'site:youtube.com "example.com"',
                description: 'YouTube videos'
            },
            {
                query: 'site:instagram.com "example.com"',
                description: 'Instagram posts'
            },
            {
                query: 'site:pinterest.com "example.com"',
                description: 'Pinterest boards'
            }
        ]
    },
    security: {
        title: "Security Research",
        icon: "fas fa-search",
        description: "Security research and vulnerability databases",
        dorks: [
            {
                query: 'site:openbugbounty.org inurl:reports intext:"example.com"',
                description: 'Open Bug Bounty reports'
            },
            {
                query: 'site:cve.mitre.org "example.com"',
                description: 'CVE database'
            },
            {
                query: 'site:exploit-db.com "example.com"',
                description: 'Exploit database'
            },
            {
                query: 'site:shodan.io "example.com"',
                description: 'Shodan results'
            },
            {
                query: 'site:censys.io "example.com"',
                description: 'Censys results'
            },
            {
                query: 'site:vulners.com "example.com"',
                description: 'Vulners database'
            },
            {
                query: '"example.com" "bug bounty" | "vulnerability disclosure" | "security report"',
                description: 'Bug bounty programs'
            },
            {
                query: 'site:*/security.txt "example.com"',
                description: 'Security.txt files'
            }
        ]
    }
};

// Advanced Dorks for specific technologies
const TECHNOLOGY_DORKS = {
    wordpress: {
        title: "WordPress Specific",
        dorks: [
            'site:example.com inurl:"/wp-admin/admin-ajax.php"',
            'site:example.com inurl:"/wp-includes/"',
            'site:example.com inurl:"/wp-content/"',
            'site:example.com filetype:php inurl:wp-config',
            'site:example.com intext:"Index of" inurl:wp-content',
            'site:example.com inurl:"/wp-json/wp/v2/users"'
        ]
    },
    drupal: {
        title: "Drupal Specific",
        dorks: [
            'site:example.com intext:"Powered by" & intext:Drupal & inurl:user',
            'site:example.com inurl:"/user/login"',
            'site:example.com inurl:"/admin/config"',
            'site:example.com filetype:module'
        ]
    },
    joomla: {
        title: "Joomla Specific", 
        dorks: [
            'site:example.com inurl:"/administrator"',
            'site:example.com inurl:"/component/"',
            'site:example.com inurl:"option=com_"'
        ]
    }
};

// Export for use in other modules
window.GOOGLE_DORKS = GOOGLE_DORKS;
window.TECHNOLOGY_DORKS = TECHNOLOGY_DORKS;
