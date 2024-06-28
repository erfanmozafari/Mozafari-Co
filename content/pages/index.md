---
type: PageLayout
title: Home
colors: colors-f
backgroundImage:
  type: BackgroundImage
  url: ''
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: >-
      MOZAFARI CO
    subtitle: >-
      The Tech Consultancy Firm You Love.
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-36
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        textAlign: center
      subtitle:
        textAlign: center
      text:
        textAlign: center
      actions:
        justifyContent: flex-start
    type: HeroSection
    actions: []
  # - colors: colors-f
  #   type: FeaturedProjectsSection
  #   elementId: ''
  #   # actions:
  #   #   - type: Link
  #   #     label: See all projects
  #   #     url: /projects
  #   showDate: false
  #   showDescription: true
  #   showFeaturedImage: true
  #   showReadMoreLink: true
  #   variant: variant-b
  #   projects:
  #     - content/pages/projects/project-two.md
  #     - content/pages/projects/project-three.md
  #     - content/pages/projects/project-one.md
  #   styles:
  #     self:
  #       height: auto
  #       width: wide
  #       margin:
  #         - mt-0
  #         - mb-0
  #         - ml-0
  #         - mr-0
  #       padding:
  #         - pt-24
  #         - pb-24
  #         - pl-4
  #         - pr-4
  #       justifyContent: center
  #     title:
  #       textAlign: center
  #     subtitle:
  #       textAlign: center
  #     actions:
  #       justifyContent: flex-end
  #   # subtitle: 'Services'
  #   title: 'Services'
  # - type: FeaturedPostsSection
  #   elementId: ''
  #   colors: colors-f
  #   variant: variant-d
  #   subtitle: Featured Posts
  #   showFeaturedImage: false
  #   actions:
  #     - type: Link
  #       label: See all posts
  #       url: /blog
  #   posts:
  #     - content/pages/blog/post-six.md
  #     - content/pages/blog/post-four.md
  #     - content/pages/blog/post-three.md
  #   showDate: true
  #   showExcerpt: true
  #   showReadMoreLink: true
  #   styles:
  #     self:
  #       height: auto
  #       width: narrow
  #       margin:
  #         - mt-0
  #         - mb-0
  #         - ml-0
  #         - mr-0
  #       padding:
  #         - pt-28
  #         - pb-48
  #         - pl-4
  #         - pr-4
  #       justifyContent: center
  #       borderRadius: none
  #       borderWidth: 0
  #       borderStyle: none
  #       borderColor: border-dark
  #     title:
  #       textAlign: left
  #     subtitle:
  #       textAlign: left
  #     actions:
  #       justifyContent: flex-end
  - type: PricingTableSection
    elementId: pricing
    colors: colors-f
    backgroundSize: full
    title: ''
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-24
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
    plans:
      - title: 'AI TELEPHONE ASSISTANT'
        image: '/images/ivr.gif'
        features:
          - 'Speaks Up To 5 Languages'
          - 'Tailored Conversations'
          - 'Available 24/7 '
          - ؜
          - ؜
          - 1 Week Delivery
        price: '€2000 - €4000'
      - title: 'AI WhatsApp Chatbot'
        image: '/images/chatbot.gif'
        price: '€1000 - €2000'
        features:
          - Speaks Up To 5 Languages
          - Tailored Conversations
          - Available 24/7
          - ؜
          - ؜
          - 1 Week Delivery
      - title: 'Website Design & SEO'
        image: '/images/website.gif'
        price: '€1500 - €3000'
        features:
          - 'Beautiful Design'
          - 'Fast Load Time'
          - 'Strong SEO'
          - ؜
          - ؜
          - 4 Weeks Delivery
  - type: MarkdownSection
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-24
          - pl-4
          - pr-4
    elementId: custom-markdown
    colors: colors-f
    backgroundSize: full
    title: ''
    text: |
      <div style="text-align: center;">
        ## Talk To Us ?
        <br />
        ## 085 800 2424
      </div>

  # - type: ContactSection
  #   colors: colors-f
  #   backgroundSize: full
  #   title: 'Which products are you interested in?'
  #   form:
  #     type: FormBlock
  #     elementId: sign-up-form
  #     fields:
  #       - name: wantsTelephone
  #         label: Telephone Assistant
  #         isRequired: false
  #         width: full
  #         type: CheckboxFormControl
  #       - name: wantsWhatsapp
  #         label: Whatsapp Chatbot
  #         isRequired: false
  #         width: full
  #         type: CheckboxFormControl
  #       - name: wantsWebsite
  #         label: Website & SEO
  #         isRequired: false
  #         width: full
  #         type: CheckboxFormControl
  #       - name: firstName
  #         label: First Name
  #         hideLabel: true
  #         placeholder: First Name
  #         isRequired: true
  #         width: 1/2
  #         type: TextFormControl
  #       - name: lastName
  #         label: Last Name
  #         hideLabel: true
  #         placeholder: Last Name
  #         isRequired: false
  #         width: 1/2
  #         type: TextFormControl
  #       - name: email
  #         label: Email
  #         hideLabel: true
  #         placeholder: Email
  #         isRequired: true
  #         width: 1/2
  #         type: EmailFormControl
  #       - name: address
  #         label: Company Name
  #         hideLabel: true
  #         placeholder: Company Name
  #         isRequired: false
  #         width: 1/2
  #         type: TextFormControl
  #       - name: Question
  #         label: Question
  #         hideLabel: true
  #         placeholder: Tell us more about your needs.
  #         isRequired: true
  #         type: TextareaFormControl
  #         rows: 4
  #       # - name: updatesConsent
  #       #   label: Sign me up to recieve updates
  #       #   isRequired: false
  #       #   width: full
  #       #   type: CheckboxFormControl
  #     submitLabel: 'Submit'
  #     styles:
  #       submitLabel:
  #         textAlign: center
  #   styles:
  #     self:
  #       height: auto
  #       width: narrow
  #       margin:
  #         - mt-0
  #         - mb-0
  #         - ml-0
  #         - mr-0
  #       padding:
  #         - pt-24
  #         - pb-24
  #         - pr-4
  #         - pl-4
  #       alignItems: center
  #       justifyContent: center
  #       flexDirection: row
  #     title:
  #       textAlign: left
  #     text:
  #       textAlign: left
---
