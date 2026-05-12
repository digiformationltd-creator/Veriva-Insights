/**
 * VERIVA INSIGHTS - SPA ROUTER
 * Handles navigation between all 11 pages
 */

const pricingHTML = (serviceName) => `
    <div class="pricing-grid">
        <div class="pricing-card reveal">
            <div class="price-header">
                <h3>STARTER</h3>
                <p>Best for: SMEs / first project</p>
                <span class="price">From £499</span>
            </div>
            <ul class="price-features">
                <li>Free sample included</li>
                <li>Up to 3 data sources</li>
                <li>Standard ${serviceName}</li>
                <li>1 revision round</li>
                <li>Delivery in 5-7 days</li>
                <li>Email support</li>
            </ul>
            <a href="#contact" class="btn-primary">Select Starter</a>
        </div>
        <div class="pricing-card featured reveal">
            <div class="price-header">
                <h3>GROWTH</h3>
                <p>Best for: Growing UK businesses</p>
                <span class="price">From £1,499</span>
            </div>
            <ul class="price-features">
                <li>Free sample included</li>
                <li>Up to 10 data sources</li>
                <li>Advanced ${serviceName}</li>
                <li>3 revision rounds</li>
                <li>Dedicated analyst</li>
                <li>Priority 3-day delivery</li>
                <li>Weekly progress calls</li>
            </ul>
            <a href="#contact" class="btn-primary">Select Growth</a>
        </div>
        <div class="pricing-card reveal">
            <div class="price-header">
                <h3>ENTERPRISE</h3>
                <p>Best for: Large organisations</p>
                <span class="price">From £3,999</span>
            </div>
            <ul class="price-features">
                <li>Free sample included</li>
                <li>Unlimited data sources</li>
                <li>Full custom solution</li>
                <li>Unlimited revisions</li>
                <li>Full IP ownership</li>
                <li>SLA guarantee</li>
                <li>Ongoing support option</li>
            </ul>
            <a href="#contact" class="btn-primary">Select Enterprise</a>
        </div>
    </div>
    <p style="text-align: center; margin-top: 30px; color: var(--color-muted);">All projects start with a <strong>FREE sample</strong> — no commitment</p>
`;

const processHTML = (serviceName) => `
    <div class="section-heading reveal" style="margin-top: 80px;">
        <h2>Our Process</h2>
    </div>
    <div class="steps-row">
        <div class="step-line"></div>
        <div class="step-item reveal">
            <div class="step-num">1</div>
            <h4>Free Sample Delivery</h4>
            <p>We build a proof-of-concept using your data within 48hrs.</p>
        </div>
        <div class="step-item reveal">
            <div class="step-num">2</div>
            <h4>Scope & Agreement</h4>
            <p>Review the sample and define the full project requirements.</p>
        </div>
        <div class="step-item reveal">
            <div class="step-num">3</div>
            <h4>Full Development</h4>
            <p>Our UK team builds the final ${serviceName} solution.</p>
        </div>
        <div class="step-item reveal">
            <div class="step-num">4</div>
            <h4>Delivery & Handover</h4>
            <p>Final sign-off, full IP transfer, and training for your team.</p>
        </div>
    </div>
`;

const routes = {
    '/': {
        title: 'Veriva Insights | AI Engineering & Data Analytics',
        render: () => `
            <div class="announcement-bar">
                <div class="announcement-text active">📊 Free Analytics Sample — See What Your Data Is Really Telling You</div>
                <div class="announcement-text">⚡ 48-Hour Sample Delivery — Request Yours Today</div>
                <div class="announcement-text">🤖 AI-Powered Insights For UK Businesses — Get Started Free</div>
            </div>
            <section class="hero">
                <canvas id="particles-canvas"></canvas>
                <div class="hero-content">
                    <div class="hero-left">
                        <div class="eyebrow-badge">📊 AI-Powered Data Analytics — UK</div>
                        <h1 style="margin-bottom: 10px;">
                            <span class="word-reveal"><span style="animation-delay: 0.3s;">Turn</span></span>
                            <span class="word-reveal"><span style="animation-delay: 0.42s;">Your</span></span>
                            <span class="word-reveal"><span style="animation-delay: 0.54s;">Data</span></span>
                            <span class="word-reveal"><span style="animation-delay: 0.66s;">Into</span></span>
                        </h1>
                        <h1 style="margin-bottom: 30px;"><span class="gradient-text-shift">Decisions That Matter.</span></h1>
                        <div class="typewriter-container">
                            <p class="typewriter" data-text="We deliver real data analytics samples and AI-engineered solutions that help UK businesses make smarter, faster, more profitable decisions."></p>
                        </div>
                        <div class="hero-ctas">
                            <a href="#samples" class="btn-primary">Get Free Data Sample</a>
                            <a href="#samples" class="btn-secondary">View Sample Gallery</a>
                        </div>
                        <div class="hero-stats">
                            <div class="stat-item"><span class="stat-val">📊 50+ Samples Delivered</span></div>
                            <div class="stat-item"><span class="stat-val">🤖 AI-Powered Solutions</span></div>
                            <div class="stat-item"><span class="stat-val">⚡ 48hr Sample Turnaround</span></div>
                        </div>
                    </div>
                    <div class="hero-right">
                        <div class="dashboard-card reveal">
                            <div class="card-header"><h4>Analytics Sample Report</h4><p>Dataset: 847,293 records</p></div>
                            <div class="chart-container"><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>
                            <div class="metric-grid">
                                <div class="metric-chip"><span class="val">96.4% ↑</span><span>Accuracy</span></div>
                                <div class="metric-chip"><span class="val">2.3s ↓</span><span>Processing</span></div>
                                <div class="metric-chip"><span class="val">47</span><span>Insights</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Trusted By Strip -->
            <div class="trusted-by">
                <p>Trusted by UK Businesses Across Multiple Industries</p>
                <div class="marquee-container">
                    <div class="marquee-content">
                        <span class="marquee-item">FINTECH SOLUTIONS</span><span class="marquee-item">RETAIL ANALYTICS</span><span class="marquee-item">HEALTH DATA UK</span><span class="marquee-item">LOGISTICS AI</span>
                        <span class="marquee-item">FINTECH SOLUTIONS</span><span class="marquee-item">RETAIL ANALYTICS</span><span class="marquee-item">HEALTH DATA UK</span><span class="marquee-item">LOGISTICS AI</span>
                    </div>
                </div>
            </div>
            <section id="services">
                <div class="section-heading reveal"><h2>Data Analytics Solutions<br><span class="glow-text-cyan">Built Around Your Business</span></h2></div>
                <div class="services-grid">
                    <div class="service-card reveal"><div class="service-icon">📊</div><h3>Data Analytics</h3><p>Transform raw data into clear reports.</p><a href="#data-analytics" class="service-link">Explore →</a></div>
                    <div class="service-card reveal"><div class="service-icon">🤖</div><h3>ML Models</h3><p>Custom machine learning solutions.</p><a href="#ml-models" class="service-link">Explore →</a></div>
                    <div class="service-card reveal"><div class="service-icon">🖥️</div><h3>BI Dashboards</h3><p>Real-time visibility tools.</p><a href="#bi-dashboards" class="service-link">Explore →</a></div>
                </div>
            </section>
            <div style="text-align:center; padding: 40px;"><a href="#contact" class="btn-primary">Request Free Sample Now</a></div>
        `
    },
    '/services': {
        title: 'Services Overview | Veriva Insights',
        render: () => `
            <section style="padding-top: 140px;">
                <div class="section-heading reveal">
                    <h1>Data Analytics & AI Solutions<br><span class="glow-text-cyan">Built for UK Businesses</span></h1>
                    <p>From raw data to predictive intelligence, we provide the tools you need to lead your industry.</p>
                </div>
                <div class="services-grid">
                    <div class="service-card reveal">
                        <div class="service-icon">📊</div>
                        <h3>Data Analytics & Reporting</h3>
                        <p>Detailed analysis of your historical performance to uncover hidden trends and efficiency gaps.</p>
                        <ul style="margin: 15px 0; font-size: 14px; color: var(--color-muted); list-style: none;">
                            <li>• Revenue Trend Analysis</li>
                            <li>• Customer Behaviour Patterns</li>
                            <li>• Operational Efficiency Audits</li>
                            <li>• Market Basket Analysis</li>
                            <li>• Custom PDF/CSV Exports</li>
                        </ul>
                        <p style="font-weight: 600; color: var(--color-accent);">Starting from £499</p>
                        <a href="#data-analytics" class="service-link">Learn More →</a>
                    </div>
                    <div class="service-card reveal">
                        <div class="service-icon">🤖</div>
                        <h3>ML Model Development</h3>
                        <p>Production-ready machine learning models designed to solve specific business problems automatically.</p>
                        <ul style="margin: 15px 0; font-size: 14px; color: var(--color-muted); list-style: none;">
                            <li>• Churn Prediction Models</li>
                            <li>• Lead Scoring Systems</li>
                            <li>• Recommendation Engines</li>
                            <li>• Automated Classification</li>
                            <li>• API-Ready Model Hosting</li>
                        </ul>
                        <p style="font-weight: 600; color: var(--color-accent);">Starting from £1,499</p>
                        <a href="#ml-models" class="service-link">Learn More →</a>
                    </div>
                    <div class="service-card reveal">
                        <div class="service-icon">🖥️</div>
                        <h3>Business Intelligence</h3>
                        <p>Centralise your data sources into beautiful, real-time dashboards that your entire team can use.</p>
                        <ul style="margin: 15px 0; font-size: 14px; color: var(--color-muted); list-style: none;">
                            <li>• Power BI / Tableau Design</li>
                            <li>• Real-time Data Pipelines</li>
                            <li>• Executive KPI Dashboards</li>
                            <li>• Automated Weekly Reports</li>
                            <li>• Cross-Platform Accessibility</li>
                        </ul>
                        <p style="font-weight: 600; color: var(--color-accent);">Starting from £999</p>
                        <a href="#bi-dashboards" class="service-link">Learn More →</a>
                    </div>
                    <div class="service-card reveal">
                        <div class="service-icon">📈</div>
                        <h3>Predictive Analytics</h3>
                        <p>Don't just look back — look ahead. Use statistical modelling to forecast future business outcomes.</p>
                        <ul style="margin: 15px 0; font-size: 14px; color: var(--color-muted); list-style: none;">
                            <li>• Demand & Sales Forecasting</li>
                            <li>• Risk Assessment Models</li>
                            <li>• Inventory Optimisation</li>
                            <li>• Financial Projections</li>
                            <li>• Scenario Simulation</li>
                        </ul>
                        <p style="font-weight: 600; color: var(--color-accent);">Starting from £1,299</p>
                        <a href="#predictive-analytics" class="service-link">Learn More →</a>
                    </div>
                    <div class="service-card reveal">
                        <div class="service-icon">💡</div>
                        <h3>Data Consulting & Strategy</h3>
                        <p>Strategic guidance on how to build a data-driven culture and infrastructure from the ground up.</p>
                        <ul style="margin: 15px 0; font-size: 14px; color: var(--color-muted); list-style: none;">
                            <li>• Data Infrastructure Audit</li>
                            <li>• 12-Month AI Roadmap</li>
                            <li>• Toolstack Recommendations</li>
                            <li>• Governance & Security</li>
                            <li>• Team Upskilling Sessions</li>
                        </ul>
                        <p style="font-weight: 600; color: var(--color-accent);">Starting from £799</p>
                        <a href="#consulting" class="service-link">Learn More →</a>
                    </div>
                </div>
            </section>
        `
    },
    '/data-analytics': {
        title: 'Data Analytics & Reporting | Veriva Insights',
        render: () => `
            <div class="service-hero reveal">
                <div class="hero-left">
                    <h1 style="font-size: 52px;">Data Analytics &<br><span class="glow-text-cyan">Reporting</span></h1>
                    <p style="font-size: 20px; color: var(--color-muted); margin-top: 20px;">Turn your historical data into a roadmap for future growth. We uncover the "why" behind your numbers.</p>
                    <div style="margin-top: 40px;"><a href="#contact" class="btn-primary">Request Free Report Sample</a></div>
                </div>
                <div class="hero-right">
                    <div class="glass-panel" style="padding: 40px; text-align: center;">
                        <div style="font-size: 60px;">📊</div>
                        <p style="margin-top: 20px; font-weight: 600;">Automated Insights</p>
                    </div>
                </div>
            </div>
            <section>
                <div class="service-content-grid">
                    <div class="reveal">
                        <h2>What is Data Analytics?</h2>
                        <p>Data analytics is the process of examining raw datasets to find patterns, draw conclusions about information, and support decision-making. In the UK's competitive business landscape, relying on "gut feeling" is no longer enough.</p>
                        <p>At Veriva Insights, we don't just hand over spreadsheets. We deliver narratives. We help you understand where your revenue is coming from, which customers are most valuable, and where your operational bottlenecks are hiding.</p>
                        <p>Our approach is grounded in UK-specific market knowledge, ensuring that our insights are relevant to your local challenges and opportunities.</p>
                        <h3 style="margin: 40px 0 20px;">What's Included?</h3>
                        <ul class="usp-list">
                            <li class="usp-item">✓ Multi-source Data Integration</li>
                            <li class="usp-item">✓ Revenue & Profit Analysis</li>
                            <li class="usp-item">✓ Customer Segmentation</li>
                            <li class="usp-item">✓ Competitor Benchmarking</li>
                            <li class="usp-item">✓ Heatmaps & Trend Charts</li>
                            <li class="usp-item">✓ Executive Summaries</li>
                            <li class="usp-item">✓ Raw Data Cleanups</li>
                            <li class="usp-item">✓ Interactive PDF Reports</li>
                        </ul>
                    </div>
                    <div class="reveal">
                        <div class="glass-panel" style="padding: 30px;">
                            <h4 style="margin-bottom: 20px;">Why It Matters</h4>
                            <div style="margin-bottom: 20px;">
                                <span style="font-size: 32px; color: var(--color-accent); font-weight: 700;">85%</span>
                                <p style="font-size: 14px;">Faster Decision Making</p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <span style="font-size: 32px; color: var(--color-accent); font-weight: 700;">22%</span>
                                <p style="font-size: 14px;">Increase in Op-Efficiency</p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <span style="font-size: 32px; color: var(--color-accent); font-weight: 700;">14k</span>
                                <p style="font-size: 14px;">Avg. Monthly Savings</p>
                            </div>
                        </div>
                    </div>
                </div>
                ${processHTML('Data Analytics')}
                <div class="section-heading reveal" style="margin-top: 80px;"><h2>Pricing Plans</h2></div>
                ${pricingHTML('Data Analytics')}
            </section>
        `
    },
    '/ml-models': {
        title: 'ML Model Development | Veriva Insights',
        render: () => `
            <div class="service-hero reveal">
                <div class="hero-left">
                    <h1 style="font-size: 52px;">ML Model<br><span class="glow-text-cyan">Development</span></h1>
                    <p style="font-size: 20px; color: var(--color-muted); margin-top: 20px;">Automate complex decisions with production-ready machine learning models trained on your proprietary data.</p>
                    <div style="margin-top: 40px;"><a href="#contact" class="btn-primary">Request Free Model Sample</a></div>
                </div>
                <div class="hero-right">
                    <div class="glass-panel" style="padding: 40px; text-align: center;">
                        <div style="font-size: 60px;">🤖</div>
                        <p style="margin-top: 20px; font-weight: 600;">Neural Network Logic</p>
                    </div>
                </div>
            </div>
            <section>
                <div class="service-content-grid">
                    <div class="reveal">
                        <h2>Predictive Power for Your Business</h2>
                        <p>Machine Learning allows your software to learn from experience rather than just following static rules. We build custom models that can predict customer churn, score potential leads, or classify complex transactions in milliseconds.</p>
                        <p>Our models are built using Python and leading frameworks like TensorFlow and Scikit-learn, ensuring they are robust, scalable, and easy to integrate into your existing tech stack.</p>
                        <p>We focus on "Explainable AI" — we don't just give you a black box; we explain exactly why the model is making its predictions so you can trust the results.</p>
                        <h3 style="margin: 40px 0 20px;">What's Included?</h3>
                        <ul class="usp-list">
                            <li class="usp-item">✓ Data Pre-processing & Cleaning</li>
                            <li class="usp-item">✓ Feature Engineering</li>
                            <li class="usp-item">✓ Model Training & Validation</li>
                            <li class="usp-item">✓ Accuracy & Bias Testing</li>
                            <li class="usp-item">✓ API Endpoint Development</li>
                            <li class="usp-item">✓ Deployment Documentation</li>
                            <li class="usp-item">✓ Python/R Source Code</li>
                            <li class="usp-item">✓ Performance Monitoring</li>
                        </ul>
                    </div>
                    <div class="reveal">
                        <div class="glass-panel" style="padding: 30px;">
                            <h4 style="margin-bottom: 20px;">Why It Matters</h4>
                            <div style="margin-bottom: 20px;">
                                <span style="font-size: 32px; color: var(--color-accent); font-weight: 700;">94%+</span>
                                <p style="font-size: 14px;">Prediction Accuracy</p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <span style="font-size: 32px; color: var(--color-accent); font-weight: 700;">0.2s</span>
                                <p style="font-size: 14px;">Processing Speed</p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <span style="font-size: 32px; color: var(--color-accent); font-weight: 700;">3.5x</span>
                                <p style="font-size: 14px;">ROI in first 6 months</p>
                            </div>
                        </div>
                    </div>
                </div>
                ${processHTML('ML Model')}
                <div class="section-heading reveal" style="margin-top: 80px;"><h2>Pricing Plans</h2></div>
                ${pricingHTML('ML Models')}
            </section>
        `
    },
    '/bi-dashboards': {
        title: 'Business Intelligence | Veriva Insights',
        render: () => `
            <div class="service-hero reveal">
                <div class="hero-left">
                    <h1 style="font-size: 52px;">Business<br><span class="glow-text-cyan">Intelligence</span></h1>
                    <p style="font-size: 20px; color: var(--color-muted); margin-top: 20px;">Real-time dashboards that bring your data to life. Power BI and Tableau solutions for the modern enterprise.</p>
                    <div style="margin-top: 40px;"><a href="#contact" class="btn-primary">Request Free Dashboard Sample</a></div>
                </div>
                <div class="hero-right">
                    <div class="glass-panel" style="padding: 40px; text-align: center;">
                        <div style="font-size: 60px;">🖥️</div>
                        <p style="margin-top: 20px; font-weight: 600;">Real-time KPIs</p>
                    </div>
                </div>
            </div>
            <section>
                <div class="service-content-grid">
                    <div class="reveal">
                        <h2>Data Visibility Across Your Organisation</h2>
                        <p>Business Intelligence (BI) is about more than just pretty charts. It's about ensuring every stakeholder in your company has access to the same, real-time "single version of the truth."</p>
                        <p>We design dashboards that are intuitive enough for non-technical staff while being deep enough for analysts to perform complex drill-throughs. Whether you use Power BI, Tableau, or custom web-based dashboards, we ensure your data is always current and actionable.</p>
                        <p>Our solutions include the back-end data engineering needed to pipe your data from various sources (SQL, APIs, Excel) directly into your BI tool without manual intervention.</p>
                        <h3 style="margin: 40px 0 20px;">What's Included?</h3>
                        <ul class="usp-list">
                            <li class="usp-item">✓ Data Pipeline Engineering</li>
                            <li class="usp-item">✓ Custom Dashboard UI/UX</li>
                            <li class="usp-item">✓ Real-time Refresh Setup</li>
                            <li class="usp-item">✓ User Access Control</li>
                            <li class="usp-item">✓ Mobile-Responsive Views</li>
                            <li class="usp-item">✓ Training for Staff</li>
                            <li class="usp-item">✓ Row-Level Security</li>
                            <li class="usp-item">✓ Monthly Maintenance</li>
                        </ul>
                    </div>
                    <div class="reveal">
                        <div class="glass-panel" style="padding: 30px;">
                            <h4 style="margin-bottom: 20px;">Why It Matters</h4>
                            <div style="margin-bottom: 20px;">
                                <span style="font-size: 32px; color: var(--color-accent); font-weight: 700;">100%</span>
                                <p style="font-size: 14px;">Data Transparency</p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <span style="font-size: 32px; color: var(--color-accent); font-weight: 700;">-12h</span>
                                <p style="font-size: 14px;">Manual Work per week</p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <span style="font-size: 32px; color: var(--color-accent); font-weight: 700;">Real-time</span>
                                <p style="font-size: 14px;">Insights Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                ${processHTML('BI Dashboard')}
                <div class="section-heading reveal" style="margin-top: 80px;"><h2>Pricing Plans</h2></div>
                ${pricingHTML('BI Dashboards')}
            </section>
        `
    },
    '/predictive-analytics': {
        title: 'Predictive Analytics | Veriva Insights',
        render: () => `
            <div class="service-hero reveal">
                <div class="hero-left">
                    <h1 style="font-size: 52px;">Predictive<br><span class="glow-text-cyan">Analytics</span></h1>
                    <p style="font-size: 20px; color: var(--color-muted); margin-top: 20px;">Forecast future trends and simulate outcomes with high-precision statistical modelling.</p>
                    <div style="margin-top: 40px;"><a href="#contact" class="btn-primary">Request Free Forecast Sample</a></div>
                </div>
                <div class="hero-right">
                    <div class="glass-panel" style="padding: 40px; text-align: center;">
                        <div style="font-size: 60px;">📈</div>
                        <p style="margin-top: 20px; font-weight: 600;">Future Projections</p>
                    </div>
                </div>
            </div>
            <section>
                <div class="service-content-grid">
                    <div class="reveal">
                        <h2>See the Future of Your Business</h2>
                        <p>Predictive analytics uses historical data, machine learning, and statistical techniques to predict future events. We help UK businesses prepare for changes in demand, market shifts, and potential risks before they happen.</p>
                        <p>Our forecasting models account for seasonality, UK holidays, and macroeconomic trends to ensure the highest possible accuracy for your specific sector.</p>
                        <p>We provide not just the forecast, but the "what-if" tools that allow you to simulate different scenarios — such as price changes or supply chain disruptions — to see their likely impact on your bottom line.</p>
                        <h3 style="margin: 40px 0 20px;">What's Included?</h3>
                        <ul class="usp-list">
                            <li class="usp-item">✓ Time-Series Analysis</li>
                            <li class="usp-item">✓ Scenario Simulation</li>
                            <li class="usp-item">✓ Risk Assessment Reports</li>
                            <li class="usp-item">✓ Seasonal Trend Adjustments</li>
                            <li class="usp-item">✓ Reorder Point Optimisation</li>
                            <li class="usp-item">✓ Financial Forecasting</li>
                            <li class="usp-item">✓ Probability Confidence Intervals</li>
                            <li class="usp-item">✓ Python-based Simulations</li>
                        </ul>
                    </div>
                    <div class="reveal">
                        <div class="glass-panel" style="padding: 30px;">
                            <h4 style="margin-bottom: 20px;">Why It Matters</h4>
                            <div style="margin-bottom: 20px;">
                                <span style="font-size: 32px; color: var(--color-accent); font-weight: 700;">98%</span>
                                <p style="font-size: 14px;">Forecast Accuracy</p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <span style="font-size: 32px; color: var(--color-accent); font-weight: 700;">-30%</span>
                                <p style="font-size: 14px;">Inventory Waste</p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <span style="font-size: 32px; color: var(--color-accent); font-weight: 700;">365d</span>
                                <p style="font-size: 14px;">Future Visibility</p>
                            </div>
                        </div>
                    </div>
                </div>
                ${processHTML('Predictive Analytics')}
                <div class="section-heading reveal" style="margin-top: 80px;"><h2>Pricing Plans</h2></div>
                ${pricingHTML('Predictive Analytics')}
            </section>
        `
    },
    '/consulting': {
        title: 'Data Consulting & Strategy | Veriva Insights',
        render: () => `
            <div class="service-hero reveal">
                <div class="hero-left">
                    <h1 style="font-size: 52px;">Data Consulting<br><span class="glow-text-cyan">& Strategy</span></h1>
                    <p style="font-size: 20px; color: var(--color-muted); margin-top: 20px;">Expert guidance on building a data-driven organisation. Audit, roadmap, and toolstack strategy.</p>
                    <div style="margin-top: 40px;"><a href="#contact" class="btn-primary">Request Free Strategy Sample</a></div>
                </div>
                <div class="hero-right">
                    <div class="glass-panel" style="padding: 40px; text-align: center;">
                        <div style="font-size: 60px;">💡</div>
                        <p style="margin-top: 20px; font-weight: 600;">Strategic Roadmap</p>
                    </div>
                </div>
            </div>
            <section>
                <div class="service-content-grid">
                    <div class="reveal">
                        <h2>Your Roadmap to AI Maturity</h2>
                        <p>Many businesses have plenty of data but don't know how to use it. Our consulting service helps you bridge the gap between "having data" and "being data-driven."</p>
                        <p>We perform deep audits of your current data infrastructure, identify gaps in your collection and storage methods, and build a 12-month roadmap for AI and analytics integration.</p>
                        <p>Our consultants act as an extension of your leadership team, providing the technical expertise needed to make high-stakes tool and infrastructure investments with confidence.</p>
                        <h3 style="margin: 40px 0 20px;">What's Included?</h3>
                        <ul class="usp-list">
                            <li class="usp-item">✓ Data Maturity Assessment</li>
                            <li class="usp-item">✓ Toolstack Gap Analysis</li>
                            <li class="usp-item">✓ ROI Projections for AI</li>
                            <li class="usp-item">✓ UK GDPR Compliance Audit</li>
                            <li class="usp-item">✓ Cloud Infrastructure Review</li>
                            <li class="usp-item">✓ Team Skills Assessment</li>
                            <li class="usp-item">✓ 12-Month Execution Plan</li>
                            <li class="usp-item">✓ Implementation Support</li>
                        </ul>
                    </div>
                    <div class="reveal">
                        <div class="glass-panel" style="padding: 30px;">
                            <h4 style="margin-bottom: 20px;">Why It Matters</h4>
                            <div style="margin-bottom: 20px;">
                                <span style="font-size: 32px; color: var(--color-accent); font-weight: 700;">12mo</span>
                                <p style="font-size: 14px;">Clear Execution Plan</p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <span style="font-size: 32px; color: var(--color-accent); font-weight: 700;">-40%</span>
                                <p style="font-size: 14px;">Reduction in Tech Debt</p>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <span style="font-size: 32px; color: var(--color-accent); font-weight: 700;">100%</span>
                                <p style="font-size: 14px;">Strategic Alignment</p>
                            </div>
                        </div>
                    </div>
                </div>
                ${processHTML('Data Consulting')}
                <div class="section-heading reveal" style="margin-top: 80px;"><h2>Pricing Plans</h2></div>
                ${pricingHTML('Consulting')}
            </section>
        `
    },
    '/samples': {
        title: 'Samples Gallery | Veriva Insights',
        render: () => `
            <section style="padding-top: 140px;">
                <div class="section-heading reveal">
                    <h1>See Our Work Before You Commit</h1>
                    <p>Every sample below was delivered to a real UK client within 48 hours. Yours could be next.</p>
                </div>
                <div class="filter-tabs reveal">
                    <button class="filter-tab active" data-filter="all">All Samples</button>
                    <button class="filter-tab" data-filter="analytics">Analytics Reports</button>
                    <button class="filter-tab" data-filter="ml">ML Models</button>
                    <button class="filter-tab" data-filter="bi">BI Dashboards</button>
                    <button class="filter-tab" data-filter="predictive">Predictions</button>
                    <button class="filter-tab" data-filter="strategy">Strategy</button>
                </div>
                <div class="samples-grid">
                    <div class="sample-card blue reveal" data-category="analytics">
                        <span class="small" style="color: var(--color-accent);">Retail Sales Analysis</span>
                        <h3>E-Commerce Performance</h3>
                        <p>Revenue trends, YoY comparison, product performance heatmap, 12-month forecast.</p>
                        <p style="font-size: 12px; color: var(--color-muted); margin-bottom: 15px;">Format: Interactive PDF + Excel</p>
                        <a href="#contact" class="btn-secondary" style="width: 100%;">Request Similar Sample</a>
                    </div>
                    <div class="sample-card cyan reveal" data-category="ml">
                        <span class="small" style="color: var(--color-accent);">Customer Churn Model</span>
                        <h3>SaaS Retention Logic</h3>
                        <p>Churn probability scores, feature importance rankings, 94.2% accuracy on UK datasets.</p>
                        <p style="font-size: 12px; color: var(--color-muted); margin-bottom: 15px;">Format: Jupyter Notebook + CSV</p>
                        <a href="#contact" class="btn-secondary" style="width: 100%;">Request Similar Sample</a>
                    </div>
                    <div class="sample-card gradient reveal" data-category="bi">
                        <span class="small" style="color: var(--color-accent);">Operations Dashboard</span>
                        <h3>Manufacturing Efficiency</h3>
                        <p>Real-time KPIs, inventory levels, production efficiency, staff utilisation.</p>
                        <p style="font-size: 12px; color: var(--color-muted); margin-bottom: 15px;">Format: PBIX file + Demo Link</p>
                        <a href="#contact" class="btn-secondary" style="width: 100%;">Request Similar Sample</a>
                    </div>
                    <div class="sample-card blue reveal" data-category="predictive">
                        <span class="small" style="color: var(--color-accent);">Demand Forecasting</span>
                        <h3>Supply Chain Optimization</h3>
                        <p>90-day demand forecast, seasonal adjustments, reorder alerts, 98% MAPE accuracy.</p>
                        <p style="font-size: 12px; color: var(--color-muted); margin-bottom: 15px;">Format: Python model + Excel</p>
                        <a href="#contact" class="btn-secondary" style="width: 100%;">Request Similar Sample</a>
                    </div>
                    <div class="sample-card cyan reveal" data-category="ml">
                        <span class="small" style="color: var(--color-accent);">Customer Segmentation</span>
                        <h3>Marketing ROI Analysis</h3>
                        <p>RFM segmentation, 5 customer clusters identified, actionable recommendations.</p>
                        <p style="font-size: 12px; color: var(--color-muted); margin-bottom: 15px;">Format: PDF + Dashboard</p>
                        <a href="#contact" class="btn-secondary" style="width: 100%;">Request Similar Sample</a>
                    </div>
                    <div class="sample-card gradient reveal" data-category="strategy">
                        <span class="small" style="color: var(--color-accent);">Data Strategy Audit</span>
                        <h3>Financial Services Roadmap</h3>
                        <p>Current state assessment, gap analysis, 12-month AI roadmap, cost estimates.</p>
                        <p style="font-size: 12px; color: var(--color-muted); margin-bottom: 15px;">Format: 24-page Document</p>
                        <a href="#contact" class="btn-secondary" style="width: 100%;">Request Similar Sample</a>
                    </div>
                </div>
                <div class="glass-panel reveal" style="margin-top: 80px; padding: 60px; text-align: center;">
                    <h2>Want a Sample for Your Industry?</h2>
                    <p style="margin-bottom: 40px;">Delivered within 48 business hours — 100% Free.</p>
                    <div style="max-width: 600px; margin: 0 auto; text-align: left;">
                        <form id="sample-request-form">
                            <div class="form-row">
                                <div class="form-group" style="flex: 1;">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="e.g. David Smith" required>
                                </div>
                                <div class="form-group" style="flex: 1;">
                                    <label>Industry</label>
                                    <input type="text" placeholder="e.g. Retail" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="e.g. david@company.co.uk" required>
                            </div>
                            <div class="form-group">
                                <label>Your Data Challenge</label>
                                <textarea placeholder="Tell us what you want to see in your sample..." rows="4" required></textarea>
                            </div>
                            <button type="submit" class="submit-btn">Request My Free Sample</button>
                        </form>
                    </div>
                </div>
            </section>
        `
    },
    '/about': {
        title: 'About Us | Veriva Insights',
        render: () => `
            <section style="padding-top: 140px;">
                <div class="section-heading reveal">
                    <h1>Proof Over Promises</h1>
                    <p>Veriva Insights was founded on a simple belief: UK businesses shouldn't have to take a leap of faith when investing in data analytics.</p>
                </div>
                <div style="max-width: 800px; margin: 0 auto;" class="reveal">
                    <p style="font-size: 18px; margin-bottom: 24px;">We're a UK-based team of AI engineers and data scientists who have delivered analytics solutions across retail, finance, healthcare, and technology. Our free sample model means every client relationship starts with proof, not promises.</p>
                    <p style="font-size: 18px; margin-bottom: 24px;">Our name comes from 'veritas' — truth. Because that's what data should give you: the truth about your business performance, your customer behaviour, and your future potential.</p>
                    <p style="font-size: 18px; margin-bottom: 40px;">We operate from hubs in London, Manchester, and Birmingham, providing local expertise with world-class technical execution.</p>
                </div>
                <div class="services-grid" style="margin-top: 60px;">
                    <div class="service-card reveal">
                        <h3>Transparency</h3>
                        <p>See the work before you buy. Our free sample process is unique in the UK market.</p>
                    </div>
                    <div class="service-card reveal">
                        <h3>Precision</h3>
                        <p>We pride ourselves on 96%+ model accuracy and rigorous statistical validation.</p>
                    </div>
                    <div class="service-card reveal">
                        <h3>Speed</h3>
                        <p>48-hour sample delivery. We move at the speed of modern business.</p>
                    </div>
                </div>
                <div class="section-heading reveal" style="margin-top: 100px;"><h2>The Core Team</h2></div>
                <div class="team-grid">
                    <div class="team-card reveal">
                        <div class="team-avatar">OW</div>
                        <strong>Oliver Wright</strong>
                        <p style="font-size: 12px; color: var(--color-muted);">Founder & Lead AI Engineer<br>MSc Data Science, UCL</p>
                    </div>
                    <div class="team-card reveal">
                        <div class="team-avatar">JL</div>
                        <strong>James Liu</strong>
                        <p style="font-size: 12px; color: var(--color-muted);">Senior ML Engineer<br>Python / TensorFlow Expert</p>
                    </div>
                    <div class="team-card reveal">
                        <div class="team-avatar">MO</div>
                        <strong>Marcus Okafor</strong>
                        <p style="font-size: 12px; color: var(--color-muted);">BI & Analytics Lead<br>Power BI / Tableau Certified</p>
                    </div>
                    <div class="team-card reveal">
                        <div class="team-avatar">RP</div>
                        <strong>Ryan Patel</strong>
                        <p style="font-size: 12px; color: var(--color-muted);">Client Solutions Manager<br>London Data Strategy Specialist</p>
                    </div>
                </div>
                <div class="section-heading reveal" style="margin-top: 100px;"><h2>Our Tech Stack</h2></div>
                <div class="tools-grid reveal">
                    <div class="tool-item">Python</div><div class="tool-item">R</div><div class="tool-item">TensorFlow</div>
                    <div class="tool-item">PyTorch</div><div class="tool-item">SQL</div><div class="tool-item">Spark</div>
                    <div class="tool-item">Power BI</div><div class="tool-item">Tableau</div><div class="tool-item">AWS</div>
                    <div class="tool-item">Azure</div><div class="tool-item">Scikit-learn</div><div class="tool-item">Docker</div>
                </div>
            </section>
        `
    },
    '/contact': {
        title: 'Contact Us | Veriva Insights',
        render: () => `
            <section style="padding-top: 140px;">
                <div class="section-heading reveal">
                    <h1>Let's Start With A Sample</h1>
                    <p>Enquiries answered within 4 business hours. UK-based support.</p>
                </div>
                <div class="contact-grid reveal">
                    <div class="contact-left glass-panel" style="padding: 40px;">
                        <form id="main-contact-form">
                            <div class="form-row">
                                <div class="form-group" style="flex: 1;">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="e.g. John Smith" required>
                                </div>
                                <div class="form-group" style="flex: 1;">
                                    <label>Company Name</label>
                                    <input type="text" placeholder="e.g. Acme UK Ltd" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group" style="flex: 1;">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="john@company.co.uk" required>
                                </div>
                                <div class="form-group" style="flex: 1;">
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="+44 7000 000 000" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Service Interested In</label>
                                <select required>
                                    <option value="">Select a service...</option>
                                    <option>Data Analytics & Reporting</option>
                                    <option>ML Model Development</option>
                                    <option>Business Intelligence</option>
                                    <option>Predictive Analytics</option>
                                    <option>Data Consulting</option>
                                    <option>Free Sample Request</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Message / Challenge Details</label>
                                <textarea rows="5" placeholder="Briefly describe your data goals..." required></textarea>
                            </div>
                            <button type="submit" class="submit-btn">Send Enquiry</button>
                        </form>
                    </div>
                    <div class="contact-right">
                        <div class="glass-panel" style="padding: 40px; margin-bottom: 30px;">
                            <h4 style="margin-bottom: 20px;">Direct Contact</h4>
                            <div class="contact-info">
                                <div class="contact-item"><span>📧</span> <a href="mailto:ukverinsights@163.com" style="color: inherit; text-decoration: none;">ukverinsights@163.com</a></div>
                                <div class="contact-item"><span>📞</span> <span>+86 173 3209 1446</span></div>
                                <div class="contact-item"><span>📍</span> <span>[UK Address — To be added]</span></div>
                            </div>
                        </div>
                        <div class="glass-panel" style="padding: 40px;">
                            <h4 style="margin-bottom: 20px;">Business Hours</h4>
                            <p style="font-size: 14px; color: var(--color-muted);">Monday - Friday: 9am - 6pm (UK Time)</p>
                            <p style="font-size: 14px; color: var(--color-muted); margin-top: 10px;">Expected response: Within 4 hours</p>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    '/faq': {
        title: 'FAQ | Veriva Insights',
        render: () => `
            <section style="padding-top: 140px;">
                <div class="section-heading reveal">
                    <h1>Frequently Asked Questions</h1>
                    <p>Everything you need to know about our data services and free sample process.</p>
                </div>
                <div class="faq-container reveal">
                    <div class="faq-item">
                        <button class="faq-question">What exactly is included in the free sample?</button>
                        <div class="faq-answer"><p>A free sample typically includes a professional-grade snapshot of the requested service using a subset of your data (or anonymised industry data). This could be a 1-page analytics report, a churn prediction for 100 users, or a high-level BI dashboard mockup.</p></div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-question">How long does the free sample take?</button>
                        <div class="faq-answer"><p>We aim to deliver all custom samples within 48 business hours of receiving your data and requirements. This speed allows you to see the value we bring almost immediately.</p></div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-question">Is the free sample really free? No hidden costs?</button>
                        <div class="faq-answer"><p>Yes, 100% free with no commitment. The goal is to prove our expertise. If you like the result, we can discuss a full project. If not, you keep the sample and we part as friends.</p></div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-question">Who owns the models and data after delivery?</button>
                        <div class="faq-answer"><p>Upon full project completion and payment, you retain 100% IP ownership of all models, dashboards, and reports we build for you. Your data always remains your own.</p></div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-question">Are you based in the UK?</button>
                        <div class="faq-answer"><p>Yes, our primary engineering team and consultants are based in the UK, with hubs in London, Manchester, and Birmingham. We understand the UK market and local regulations like GDPR.</p></div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-question">Do you work with all industries?</button>
                        <div class="faq-answer"><p>While we have extensive experience in Retail, Finance, SaaS, and Manufacturing, our data engineering principles apply to almost any sector that generates digital data.</p></div>
                    </div>
                </div>
            </section>
        `
    },
    '/privacy': {
        title: 'Privacy Policy | Veriva Insights',
        render: () => `
            <section style="padding-top: 140px; max-width: 900px; margin: 0 auto;">
                <div class="section-heading reveal"><h1>Privacy Policy</h1><p>Last Updated: May 2026</p></div>
                <div class="reveal" style="line-height: 2;">
                    <h2 style="margin: 30px 0 15px; font-size: 24px;">1. Introduction</h2>
                    <p>Veriva Insights Ltd ("we", "our", or "us") is committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal data in compliance with the UK GDPR.</p>
                    <h2 style="margin: 30px 0 15px; font-size: 24px;">2. Data We Collect</h2>
                    <p>We may collect and process name, email address, phone number, company information, and any data snippets you provide for the purpose of building a free sample.</p>
                    <h2 style="margin: 30px 0 15px; font-size: 24px;">3. How We Use Your Data</h2>
                    <p>We use your data to provide the requested services, communicate with you about your enquiry, and improve our analytics models. We do not sell your data to third parties.</p>
                    <h2 style="margin: 30px 0 15px; font-size: 24px;">4. Data Security</h2>
                    <p>We implement robust technical and organisational measures to ensure a level of security appropriate to the risk, including encryption and restricted access controls.</p>
                    <h2 style="margin: 30px 0 15px; font-size: 24px;">5. Your Rights</h2>
                    <p>Under the UK GDPR, you have the right to access, rectify, or erase your personal data, and the right to object to or restrict processing.</p>
                    <h2 style="margin: 30px 0 15px; font-size: 24px;">6. Contact</h2>
                    <p>For any privacy-related enquiries, please contact our Data Protection Officer at ukverinsights@163.com.</p>
                </div>
            </section>
        `
    }
};

const navigateTo = (path) => {
    window.location.hash = path === '/' ? '' : path.substring(1);
};

const router = () => {
    let path = window.location.hash.substring(1) || '/';
    if (!path.startsWith('/')) path = '/' + path;
    
    const route = routes[path] || routes['/'];
    
    document.title = route.title;
    const app = document.getElementById('app-container');
    app.innerHTML = route.render();
    
    // Update active states in all navs
    document.querySelectorAll('.nav-link, .bn-item').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        const cleanPath = path === '/' ? '#' : '#' + path.substring(1);
        if (href === cleanPath) link.classList.add('active');
    });
    
    // Re-initialize app scripts for new content
    if (typeof initRevealAnimations === 'function') initRevealAnimations();
    if (typeof initParticles === 'function' && path === '/') initParticles();
    if (typeof initTypewriter === 'function' && path === '/') initTypewriter();
    if (typeof initAnnouncementBar === 'function' && path === '/') initAnnouncementBar();
    
    // Scroll to top
    window.scrollTo(0, 0);
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Handle clicks on internal links
document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
        // Only prevent default if it's not just a hash anchor on the same page
        // For this SPA, all # links are routes
        // navigateTo will trigger hashchange which calls router()
    }
});
