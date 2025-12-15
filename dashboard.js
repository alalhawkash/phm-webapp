
        // Zone full names
        const ZONE_FULL_NAMES = {
            BGH: 'Bader Aljanoob General Hospital',
            HGH: 'Hubona General Hospital',
            KGH: 'Khubash General Hospital',
            KKH: 'King Khaled Hospital',
            MCH: 'Maternity and Children Hospital',
            WNH: 'West Najran General Hospital',
            NNGH: 'New Najran General Hospital',
            SGH: 'Sharourah General Hospital',
            TGH: 'Thar General Hospital',
            YGH: 'Yaddamah General Hospital'
        };

        // PHC to Zone mapping
        const PHC_ZONE_MAP = {
            "AL- qarn": "BGH",
            "Hadadah health center": "BGH",
            "Primary Care Alkhaniq": "BGH",
            "alrehab Primary care center": "BGH",
            "bader aljanoob primary health care": "BGH",
            "maleha public health center": "BGH",
            "AL JAFFAH PHCC": "HGH",
            "ALMONTSHER  PHCC": "HGH",
            "Habuna primary Health Care Center": "HGH",
            "al harshar phcc": "HGH",
            "dekah": "HGH",
            "majma": "HGH",
            "AL-SHARAA": "KGH",
            "KHUBASH Health center": "KGH",
            "Primary Health Care Center GOILLA": "KGH",
            "junoob matar": "KGH",
            "mishaliya": "KGH",
            "taslal health center": "KGH",
            "ALDUBAT PHCC": "KKH",
            "Al Faisaliah Health Center": "KKH",
            "Aqfah phcc": "KKH",
            "Biraskar phcc": "KKH",
            "Primary Health Care Center DIYAFA": "KKH",
            "al contub": "KKH",
            "khaldiya health center": "KKH",
            "primary health care center north": "KKH",
            "prince mishal health center": "KKH",
            "al fahad al janubi phcc": "MCH",
            "Al Fahad Al Janubi PHCC": "MCH",
            "Al Fahad Al Janubi phcc": "MCH",
            "al fahad al janubi PHCC": "MCH",
            "atheabah phcc": "MCH",
            "Al Safa Health Center": "WNH",
            "Al muratah phcc": "WNH",
            "Alhadan PHCC": "WNH",
            "Health Center algabil": "WNH",
            "Health center in aljurbah": "WNH",
            "PHCC Abasoud": "WNH",
            "albalad": "WNH",
            "dahada helth center": "WNH",
            "eam phcc reer": "WNH",
            "health center al mufja": "WNH",
            "Primary Health Care Center in Nhogah": "WNH",
            "Shebhan phcc": "WNH",
            "Al Arisa Health Center": "NNGH",
            "Alhamar phcc": "NNGH",
            "HUSSAINIAH PHCC": "NNGH",
            "RIJLA PHcc": "NNGH",
            "primary health care center barrk": "NNGH",
            "primary health care center of shurfa": "NNGH",
            "Wadi Riman Health Center": "NNGH",
            "Alakashim Health Center": "SGH",
            "Aziziyah PHCC Sharoora": "SGH",
            "RAWDAH phcc Sharoora": "SGH",
            "Security Forces PHCC Sharoora": "SGH",
            "Sultanaa PHCC Sharoora": "SGH",
            "Tamani phcc Sharoura": "SGH",
            "alwadia phcc sharoora": "SGH",
            "khaldiya sharoorah health center": "SGH",
            "hema phcc": "TGH",
            "naiwan phcc": "TGH",
            "qattan phcc": "TGH",
            "suffah phcc": "TGH",
            "talham phcc": "TGH",
            "thar phcc": "TGH",
            "tilah phcc": "TGH",
            "legam primary health care center": "YGH",
            "mohammadia phcc": "YGH",
            "sultana primaryhealth care center": "YGH",
            "wadi wasat": "YGH",
            "yadama primary health care center": "YGH"
        };

        // PHC Display Names mapping
        const PHC_DISPLAY_NAMES = {
            "hema phcc": "Hema",
            "naiwan phcc": "Na'wan",
            "qattan phcc": "Qattan",
            "suffah phcc": "Suffah",
            "talham phcc": "Talham",
            "thar phcc": "Thar",
            "tilah phcc": "Tila'h",
            "Alhamar phcc": "Al Hamar",
            "HUSSAINIAH PHCC": "Al Hussainiah",
            "primary health care center barrk": "Berrk",
            "primary health care center of shurfa": "Al Shurfah",
            "RIJLA PHcc": "Rijla",
            "Wadi Riman Health Center": "Wadi Riman",
            "alrehab Primary care center": "Al Rehab",
            "bader aljanoob primary health care": "Bader Al Janoob",
            "Hadadah health center": "Hadadah",
            "maleha public health center": "Al Maleha",
            "Primary Care Alkhaniq": "Al Khaniq",
            "al harshar phcc": "Al Harshaf",
            "AL JAFFAH PHCC": "Al Jaffah",
            "ALMONTSHER PHCC": "Al Montsher",
            "dekah": "Al Dekah",
            "Habuna primary Health Care Center": "Habuna",
            "majma": "Al Majma",
            "Al Faisaliah Health Center": "Al Faisaliah",
            "ALDUBAT PHCC": "Al Dubat",
            "Aqfah phcc": "Aqfah",
            "Biraskar phcc": "Bir Askar",
            "khaldiya health center": "Al Khaldiah",
            "Primary Health Care Center DIYAFA": "Al Diyafah",
            "primary health care center north": "Al Fahad Alshimaly",
            "prince mishal health center": "Prince Mishal",
            "Alakashim Health Center": "Al Akhashim",
            "alwadia phcc sharoora": "Alwadia",
            "Aziziyah PHCC Sharoora": "Aziziyah",
            "khaldiya sharoorah health center": "Khaldiya",
            "RAWDAH phcc Sharoora": "Rawdah",
            "Security Forces PHCC Sharoora": "Security Forces",
            "Sultanaa PHCC Sharoora": "Sultanah",
            "Al muratah phcc": "Al Muratah",
            "Al Safa Health Center": "Al Safa",
            "albalad": "Albalad",
            "Alhadan PHCC": "Alhadan",
            "dahada helth center": "Dahada",
            "eam phcc reer": "Rir",
            "health center al mufja": "Al Mufja",
            "Health Center algabil": "Al Gabil",
            "Health center in aljurbah": "Al Jurbah",
            "PHCC Abasoud": "Aba Saoud",
            "Primary Health Care Center in Nhogah": "Nhogah",
            "Shebhan phcc": "Shabhan",
            "AL-SHARAA": "Al Kharaa",
            "junoob matar": "Junoob Al Matar",
            "KHUBASH Health center": "Khubash",
            "mishaliya": "Mishaliya",
            "Primary Health Care Center GOILLA": "Goilla",
            "taslal health center": "Taslal",
            "atheabah phcc": "Al Athaibah",
            "legam primary health care center": "Lejam",
            "mohammadia phcc": "Mohammadia",
            "sultana primaryhealth care center": "Sultana",
            "wadi wasat": "Wadi Wasat",
            "yadama primary health care center": "Yaddamah",
            "al fahad al janubi phcc": "Al Fahad Al Janubi",
            "Al Fahad Al Janubi PHCC": "Al Fahad Al Janubi",
            "Al Fahad Al Janubi phcc": "Al Fahad Al Janubi",
            "al fahad al janubi PHCC": "Al Fahad Al Janubi"
        };

        const SCREENING_ZONE_START_ROW = 10; // Will be found dynamically
        const SCREENING_ZONE_NAME_COL = 3; // column D
        const SCREENING_ZONE_OPP_COL = 4; // Opportunities By Zone
        const SCREENING_ZONE_VALUE_COL = 5; // Screened by Zone
        const SCREENING_ZONE_TARGET_COL = 6; // Target by Zone
        const SCREENING_ZONE_INDICATOR_COL = 7; // 7-Day Indicator by Zone
        const SCREENING_ZONE_LIMIT = 10;

        // PHC Rankings rows (after zone rankings)
        const SCREENING_PHC_NAME_COL = 9; // column J
        const SCREENING_PHC_OPP_COL = 10; // Opportunities By PHC
        const SCREENING_PHC_VALUE_COL = 11; // Screened by PHC
        const SCREENING_PHC_TARGET_COL = 12; // Target by PHC
        const SCREENING_PHC_INDICATOR_COL = 13; // 7-Day Indicator by PHC
        const DM_PHC_NAME_COL = 24; // DM PHC
        const DM_PHC_TOTAL_COL = 25; // DM Patients
        const DM_PHC_CONTROLLED_COL = 26; // Controlled DM
        const DM_PHC_INDICATOR_COL = 28; // 7-Day Indicator DM
        const PREDM_PHC_NAME_COL = 39; // PRE-DM PHC
        const PREDM_PHC_TOTAL_COL = 40; // Pre-DM Patients
        const PREDM_PHC_NORMAL_COL = 41; // Pre-DM to Normal
        const PREDM_PHC_FOLLOWUP_COL = 42; // Pre-DM No Follow-up
        const PREDM_PHC_INDICATOR_COL = 43; // 7-Day Indicator PRE-DM

        const DM_ZONE_START_ROW = 98; // Will be found dynamically
        const DM_ZONE_NAME_COL = 18; // DM Zone
        const DM_ZONE_TOTAL_COL = 19; // DM Patients
        const DM_ZONE_CONTROLLED_COL = 20; // Controlled DM
        const DM_ZONE_INDICATOR_COL = 22; // 7-Day Indicator DM
        const DM_ZONE_LIMIT = 10;

        // Explicit overview rows
        const SCREENING_TARGET_ROW = 4; // B5 -> zero-indexed 4
        const SCREENING_CURRENT_ROW = 5; // B6 -> zero-indexed 5

        // DM overview (fixed cells in column Q)
        const DM_OVERVIEW_COL = 16; // column Q (zero-indexed)
        const DM_OVERVIEW_PATIENTS_ROW = 1; // Q2
        const DM_OVERVIEW_CONTROLLED_ROW = 2; // Q3
        const DM_OVERVIEW_UNCONTROLLED_ROW = 3; // Q4

        // PRE-DM overview (fixed cells in column AF)
        const PREDM_OVERVIEW_COL = 31; // column AF (zero-indexed)
        const PREDM_OVERVIEW_PATIENTS_ROW = 1; // AF2
        const PREDM_OVERVIEW_NORMAL_ROW = 2; // AF3
        const PREDM_OVERVIEW_NOFOLLOW_ROW = 3; // AF4

        const PREDM_LABEL_COL = 28; // column AC (zero-indexed: 28)
        const PREDM_VALUE_COL = 29; // column AD (zero-indexed: 29)

        const PREDM_ZONE_START_ROW = 179; // Will be found dynamically
        const PREDM_ZONE_NAME_COL = 33; // PRE-DM Zone
        const PREDM_ZONE_TOTAL_COL = 34; // Pre-DM Patients
        const PREDM_ZONE_NORMAL_COL = 35; // Pre-DM to Normal
        const PREDM_ZONE_FOLLOWUP_COL = 36; // Pre-DM No Follow-up
        const PREDM_ZONE_INDICATOR_COL = 37; // 7-Day Indicator PRE-DM
        const PREDM_ZONE_LIMIT = 10;

        let screeningTargetTotal = null;
        let screeningCurrentTotal = null;
        let screeningOpportunitiesTotal = null;
        let dmPatientsTotal = null;
        let controlledDMTotal = null;
        let uncontrolledDMTotal = null;
        let predmPatientsTotal = null;
        let predmToNormalTotal = null;
        let predmNoFollowupTotal = null;
        let globalSheetData = null; // Store sheet data globally

        function updateScreeningPercentage() {
            const screenedEl = document.getElementById('currentValue');
            const remainingEl = document.getElementById('percentageValue');
            const opportunitiesEl = document.getElementById('opportunitiesValue');
            if (!screenedEl || !remainingEl) return;

            const hasTarget = screeningTargetTotal !== null && screeningTargetTotal !== undefined;
            const hasCurrent = screeningCurrentTotal !== null && screeningCurrentTotal !== undefined;
            const target = hasTarget ? screeningTargetTotal : 0;
            const current = hasCurrent ? screeningCurrentTotal : 0;
            const opportunities = screeningOpportunitiesTotal ?? 0;

            const screenedPct = target > 0 ? (current / target) * 100 : 0;
            const remaining = Math.max(0, target - current);
            const remainingPct = target > 0 ? (remaining / target) * 100 : 0;

            screenedEl.innerHTML = `<span class="metric-percent">${screenedPct.toFixed(1)}%</span><span class="metric-count">${current.toLocaleString()}</span>`;
            remainingEl.innerHTML = `<span class="metric-percent">${remainingPct.toFixed(1)}%</span><span class="metric-count">${remaining.toLocaleString()}</span>`;
            if (opportunitiesEl) {
                opportunitiesEl.innerHTML = `<span class="metric-count">${opportunities.toLocaleString()}</span>`;
            }
        }

        function updateDMPercentages() {
            const patients = dmPatientsTotal ?? 0;
            const controlled = controlledDMTotal ?? 0;
            const uncontrolled = uncontrolledDMTotal ?? 0;

            const controlledPct = patients > 0 ? (controlled / patients) * 100 : 0;
            const uncontrolledPct = patients > 0 ? (uncontrolled / patients) * 100 : 0;

            document.getElementById('controlledDMPercent').textContent = `${controlledPct.toFixed(1)}%`;
            document.getElementById('uncontrolledDMPercent').textContent = `${uncontrolledPct.toFixed(1)}%`;
        }

        function updatePreDMPercentages() {
            const patients = predmPatientsTotal ?? 0;
            const toNormal = predmToNormalTotal ?? 0;
            const noFollowup = predmNoFollowupTotal ?? 0;

            const toNormalPct = patients > 0 ? (toNormal / patients) * 100 : 0;
            const noFollowupPct = patients > 0 ? (noFollowup / patients) * 100 : 0;

            document.getElementById('preDMToNormalPercent').textContent = `${toNormalPct.toFixed(1)}%`;
            document.getElementById('preDMNoFollowupPercent').textContent = `${noFollowupPct.toFixed(1)}%`;
        }

        function populateScreeningZones(rows) {
            const container = document.getElementById('screeningZonesList');
            if (!container) return;

            let html = '<div class="zone-header"><div class="zone-header-item">Zone</div><div class="zone-header-item">Missed Opps</div><div class="zone-header-item">Screened</div><div class="zone-header-item">Weekly</div></div>';
            let rank = 1;
            
            // Apply scope filtering
            const shouldShowZone = (zoneName) => {
                if (!userScopeData) return true; // If no scope data, show all
                if (userScopeData.scope === 'cluster') return true; // Cluster sees all
                if (userScopeData.scope === 'zone') return zoneName === userScopeData.zone_id; // Zone sees only their zone
                if (userScopeData.scope === 'phc') {
                    // PHC users see only their zone
                    return zoneName === userScopeData.zone_id;
                }
                return true;
            };

            // Find the "SCREENING Zone" header row
            let startRow = SCREENING_ZONE_START_ROW;
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i] || [];
                const firstCell = String(row[SCREENING_ZONE_NAME_COL] || '').trim().toUpperCase();
                if (firstCell.includes('SCREENING ZONE') || firstCell.includes('SCREENING ZONE')) {
                    startRow = i + 1; // Start from row after header
                    break;
                }
            }

            for (let i = startRow; i < rows.length; i++) {
                const row = rows[i] || [];
                const zoneName = (row[SCREENING_ZONE_NAME_COL] || '').trim();
                const oppRaw = (row[SCREENING_ZONE_OPP_COL] || '').trim();
                const achievedRaw = (row[SCREENING_ZONE_VALUE_COL] || '').trim();
                const targetRaw = (row[SCREENING_ZONE_TARGET_COL] || '').trim();
                const indicatorRaw = (row[SCREENING_ZONE_INDICATOR_COL] || '').toString().trim();
                const indicatorNum = parseFloat(indicatorRaw);

                const oppNum = parseFloat(oppRaw.replace(/,/g, ''));
                const achievedNum = parseFloat(achievedRaw.replace(/,/g, ''));
                const targetNum = parseFloat(targetRaw.replace(/,/g, ''));
                const oppText = oppRaw || (!isNaN(oppNum) ? oppNum.toLocaleString() : '0');
                let zoneValueText = achievedRaw || (isNaN(achievedNum) ? '0' : achievedNum.toLocaleString());

                let indicatorArrow = '-';
                let indicatorClass = 'zone-arrow zone-arrow-neutral';
                let indicatorText = '';
                if (!isNaN(indicatorNum) && indicatorNum !== 0) {
                    indicatorArrow = indicatorNum > 0 ? '↑' : '↓';
                    indicatorClass = indicatorNum > 0 ? 'zone-arrow zone-arrow-up' : 'zone-arrow zone-arrow-down';
                    indicatorText = Math.abs(indicatorNum).toLocaleString();
                } else if (!isNaN(indicatorNum) && indicatorNum === 0) {
                    indicatorText = '0';
                }

                if (!zoneName) break;
                
                // Apply scope filter for screening
                if (!shouldShowZone(zoneName)) continue;

                const escapedZoneName = zoneName.replace(/'/g, "\\'").replace(/"/g, '&quot;');
                html += `
                    <div class="zone-item zone-item--screening" onclick="navigateToZone('${escapedZoneName}', 'screening')">
                        <div class="zone-name">
                            <span class="zone-name-text">${zoneName}</span>
                        </div>
                        <span class="zone-value">${oppText}</span>
                        <span class="zone-value">${zoneValueText}</span>
                        <div class="zone-7d-indicator">
                            <span class="${indicatorClass}">
                                ${indicatorArrow}${indicatorText ? ` ${indicatorText}` : ''}
                            </span>
                        </div>
                                </div>
                `;

                rank++;
                if (rank > SCREENING_ZONE_LIMIT) break;
            }

            if (rank === 1) {
                html += '<div class="zone-item"><span class="zone-name">No zone data</span></div>';
            }

            container.innerHTML = html;
        }

        function populateDMZones(rows) {
            const container = document.getElementById('dmZonesList');
            if (!container) return;

            let html = '<div class="zone-header zone-header--dm"><div class="zone-header-item">Zone</div><div class="zone-header-item">Controlled</div><div class="zone-header-item">Uncontrolled</div><div class="zone-header-item">Weekly</div></div>';
            let rank = 1;
            
            // Apply scope filtering
            const shouldShowZone = (zoneName) => {
                if (!userScopeData) return true;
                if (userScopeData.scope === 'cluster') return true;
                if (userScopeData.scope === 'zone') return zoneName === userScopeData.zone_id;
                if (userScopeData.scope === 'phc') return zoneName === userScopeData.zone_id;
                return true;
            };

            // Find the "DM Zone" header row
            let startRow = DM_ZONE_START_ROW;
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i] || [];
                const colQCell = String(row[DM_ZONE_NAME_COL] || '').trim().toUpperCase();
                if (colQCell.includes('DM ZONE') || colQCell.includes('DM ZONE')) {
                    startRow = i + 1; // Start from row after header
                    break;
                }
            }

            for (let i = startRow; i < rows.length; i++) {
                const row = rows[i] || [];
                const zoneName = (row[DM_ZONE_NAME_COL] || '').trim();
                const totalRaw = (row[DM_ZONE_TOTAL_COL] || '').trim();
                const controlledRaw = (row[DM_ZONE_CONTROLLED_COL] || '').trim();
                const indicatorRaw = (row[DM_ZONE_INDICATOR_COL] || '').toString().trim();
                const indicatorNum = parseFloat(indicatorRaw);

                const totalNum = parseFloat(totalRaw.replace(/,/g, ''));
                const controlledNum = parseFloat(controlledRaw.replace(/,/g, ''));
                const uncontrolledNum = !isNaN(totalNum) && !isNaN(controlledNum) ? Math.max(0, totalNum - controlledNum) : 0;
                
                const controlledText = !isNaN(controlledNum) ? controlledNum.toLocaleString() : '0';
                const uncontrolledText = uncontrolledNum.toLocaleString();

                let indicatorArrow = '-';
                let indicatorClass = 'zone-arrow zone-arrow-neutral';
                let indicatorText = '';
                if (!isNaN(indicatorNum) && indicatorNum !== 0) {
                    indicatorArrow = indicatorNum > 0 ? '↑' : '↓';
                    indicatorClass = indicatorNum > 0 ? 'zone-arrow zone-arrow-up' : 'zone-arrow zone-arrow-down';
                    indicatorText = Math.abs(indicatorNum).toLocaleString();
                } else if (!isNaN(indicatorNum) && indicatorNum === 0) {
                    indicatorText = '0';
                }

                if (!zoneName) break;
                
                // Apply scope filter for DM
                if (!shouldShowZone(zoneName)) continue;

                const escapedZoneName = zoneName.replace(/'/g, "\\'").replace(/"/g, '&quot;');
                html += `
                    <div class="zone-item zone-item--dm" onclick="navigateToZone('${escapedZoneName}', 'dm')">
                        <div class="zone-name">
                            <span class="zone-name-text">${zoneName}</span>
                        </div>
                        <span class="zone-value">${controlledText}</span>
                        <span class="zone-value">${uncontrolledText}</span>
                        <div class="zone-7d-indicator">
                            <span class="${indicatorClass}">
                                ${indicatorArrow}${indicatorText ? ` ${indicatorText}` : ''}
                            </span>
                        </div>
                    </div>
                `;

                rank++;
                if (rank > DM_ZONE_LIMIT) break;
            }

            if (rank === 1) {
                html += '<div class="zone-item"><span class="zone-name">No zone data</span></div>';
            }

            container.innerHTML = html;
        }

        function populatePreDMZones(rows) {
            const container = document.getElementById('predmZonesList');
            if (!container) return;

            let html = '<div class="zone-header zone-header--predm"><div class="zone-header-item">Zone</div><div class="zone-header-item">Normal</div><div class="zone-header-item">Follow-up</div><div class="zone-header-item">Weekly</div></div>';
            let rank = 1;
            
            // Apply scope filtering
            const shouldShowZone = (zoneName) => {
                if (!userScopeData) return true;
                if (userScopeData.scope === 'cluster') return true;
                if (userScopeData.scope === 'zone') return zoneName === userScopeData.zone_id;
                if (userScopeData.scope === 'phc') return zoneName === userScopeData.zone_id;
                return true;
            };

            // Find the "PRE-DM Zone" header row
            let startRow = PREDM_ZONE_START_ROW;
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i] || [];
                const colAFCell = String(row[PREDM_ZONE_NAME_COL] || '').trim().toUpperCase();
                if (colAFCell.includes('PRE-DM ZONE') || colAFCell.includes('PRE-DM ZONE')) {
                    startRow = i + 1; // Start from row after header
                    break;
                }
            }

            for (let i = startRow; i < rows.length; i++) {
                const row = rows[i] || [];
                const zoneName = (row[PREDM_ZONE_NAME_COL] || '').trim();
                const totalRaw = (row[PREDM_ZONE_TOTAL_COL] || '').trim();
                const normalRaw = (row[PREDM_ZONE_NORMAL_COL] || '').trim();
                const followupRaw = (row[PREDM_ZONE_FOLLOWUP_COL] || '').trim();
                const indicatorRaw = (row[PREDM_ZONE_INDICATOR_COL] || '').toString().trim();
                const indicatorNum = parseFloat(indicatorRaw);

                const totalNum = parseFloat(totalRaw.replace(/,/g, ''));
                const normalNum = parseFloat(normalRaw.replace(/,/g, ''));
                const followupNum = parseFloat(followupRaw.replace(/,/g, ''));
                
                const normalText = normalRaw || (!isNaN(normalNum) ? normalNum.toLocaleString() : '0');
                const followupText = followupRaw || (!isNaN(followupNum) ? followupNum.toLocaleString() : '0');

                let indicatorArrow = '-';
                let indicatorClass = 'zone-arrow zone-arrow-neutral';
                let indicatorText = '';
                if (!isNaN(indicatorNum) && indicatorNum !== 0) {
                    indicatorArrow = indicatorNum > 0 ? '↑' : '↓';
                    indicatorClass = indicatorNum > 0 ? 'zone-arrow zone-arrow-up' : 'zone-arrow zone-arrow-down';
                    indicatorText = Math.abs(indicatorNum).toLocaleString();
                } else if (!isNaN(indicatorNum) && indicatorNum === 0) {
                    indicatorText = '0';
                }

                if (!zoneName) break;
                
                // Apply scope filter for Pre-DM
                if (!shouldShowZone(zoneName)) continue;

                const escapedZoneName = zoneName.replace(/'/g, "\\'").replace(/"/g, '&quot;');
                html += `
                    <div class="zone-item zone-item--predm" onclick="navigateToZone('${escapedZoneName}', 'predm')">
                        <div class="zone-name">
                            <span class="zone-name-text">${zoneName}</span>
                        </div>
                        <span class="zone-value" style="color: #4a9e5f;">${normalText}</span>
                        <span class="zone-value" style="color: #c85a5a;">${followupText}</span>
                        <div class="zone-7d-indicator">
                            <span class="${indicatorClass}">
                                ${indicatorArrow}${indicatorText ? ` ${indicatorText}` : ''}
                            </span>
                        </div>
                    </div>
                `;

                rank++;
                if (rank > PREDM_ZONE_LIMIT) break;
            }

            if (rank === 1) {
                html += '<div class="zone-item"><span class="zone-name">No zone data</span></div>';
            }

            container.innerHTML = html;
        }

        // Load user scope from parent window or localStorage
        let userScopeData = null;
        try {
            const scopeJson = localStorage.getItem('userScope');
            if (scopeJson) {
                userScopeData = JSON.parse(scopeJson);
                console.log('User scope loaded:', userScopeData);
            }
        } catch (e) {
            console.error('Error loading user scope:', e);
        }

        // Load data from Supabase (or fallback to Google Sheets)
        (function() {
            const SHEET_ID = '1v5hh2tu53eVMPRLE3tCk_Gf39Rb2Rt1sseZHCdyGzvE';
            const SHEET_NAME = 'Summary';
            
            // Supabase client (same config as main app)
            const SUPABASE_URL = 'https://zobmqwncusqkbmyzmvxi.supabase.co';
            const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvYm1xd25jdXNxa2JteXptdnhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2NTA1MjcsImV4cCI6MjA4MTIyNjUyN30.dISVd9GJ6ITsfIt-41b4lRtO2oYs9XSS768bdATLoVk';
            const supabaseDashboard = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            
            function parseCSV(csvText) {
                const rows = [];
                let row = [];
                let field = '';
                let inQuotes = false;
            
                for (let i = 0; i < csvText.length; i++) {
                    const char = csvText[i];
                    const nextChar = csvText[i + 1];
            
                    if (char === '"') {
                        if (inQuotes && nextChar === '"') {
                            field += '"';
                            i++; // skip escaped quote
                        } else {
                            inQuotes = !inQuotes;
                        }
                    } else if (char === ',' && !inQuotes) {
                        row.push(field.trim());
                        field = '';
                    } else if ((char === '\n' || char === '\r') && !inQuotes) {
                        // handle Windows newlines \r\n
                        if (char === '\r' && nextChar === '\n') {
                            i++;
                        }
                        row.push(field.trim());
                        rows.push(row);
                        row = [];
                        field = '';
                    } else {
                        field += char;
                    }
                }
            
                // Push any trailing field/row
                if (field.length > 0 || row.length > 0) {
                    row.push(field.trim());
                    rows.push(row);
                }
            
                return rows.filter(r => r.some(cell => (cell || '').trim() !== ''));
            }
            
            function showLoading() {
                const loadingOverlay = document.getElementById('loadingOverlay');
                if (loadingOverlay) loadingOverlay.classList.add('active');
            }

            function hideLoading() {
                const loadingOverlay = document.getElementById('loadingOverlay');
                if (loadingOverlay) loadingOverlay.classList.remove('active');
            }
            
            function showLoadError(message) {
                const errorEl = document.getElementById('loadError');
                if (!errorEl) return;
                if (message) {
                    errorEl.textContent = message;
                }
                errorEl.classList.add('active');
            }

            function hideLoadError() {
                const errorEl = document.getElementById('loadError');
                if (!errorEl) return;
                errorEl.classList.remove('active');
            }

            function loadDataFromGoogleSheets() {
                showLoading();
                hideLoadError();
                
                // Use CSV export which is more reliable for CORS
                const publishedUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`;
                const gvizUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(SHEET_NAME)}`;
                
                // Try direct fetch first, then fall back to proxies
                const sources = [
                    publishedUrl,
                    gvizUrl,
                    `https://api.allorigins.win/raw?url=${encodeURIComponent(publishedUrl)}`,
                    `https://api.allorigins.win/raw?url=${encodeURIComponent(gvizUrl)}`,
                    `https://corsproxy.io/?${encodeURIComponent(publishedUrl)}`,
                    `https://corsproxy.io/?${encodeURIComponent(gvizUrl)}`
                ];
                
                function trySource(index) {
                    if (index >= sources.length) {
                        console.error('All fetch methods failed.');
                        showLoadError('Unable to load data. Please check your connection and try again.');
                        hideLoading();
                        return;
                    }
            
                    fetch(sources[index], { mode: 'cors' })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`HTTP error! status: ${response.status}`);
                            }
                            return response.text();
                        })
                        .then(text => {
                            if (!text || text.trim().length === 0) {
                                throw new Error('Empty response');
                            }
                            const sheetData = parseCSV(text);
                            if (sheetData.length > 0) {
                                hideLoadError();
                                updateMobileAppData(sheetData);
                                console.log('✓ Data loaded successfully from Google Sheets');
                                hideLoading();
                            } else {
                                throw new Error('No data parsed');
                            }
                        })
                        .catch(() => {
                            // Silently try next source
                            if (index + 1 >= sources.length) {
                                showLoadError('Unable to load data. Please check your connection and try again.');
                                hideLoading();
                            }
                            trySource(index + 1);
                        });
                }
                
                trySource(0);
            }
            
        function updateMobileAppData(data) {
        // Update last updated timestamp (now in B6 -> row index 5, col index 1). Fallback to old I1 if missing.
        const lastUpdatedCell =
            (data && data[5] && typeof data[5][1] !== 'undefined' ? data[5][1] : '') ||
            (data && data[0] && typeof data[0][8] !== 'undefined' ? data[0][8] : '');
        const lastUpdatedEl = document.getElementById('lastUpdated');
        const lastUpdatedValueEl = document.getElementById('lastUpdatedValue');
        if (lastUpdatedValueEl) {
            lastUpdatedValueEl.textContent = lastUpdatedCell || '--';
        } else if (lastUpdatedEl) {
            // Fallback if span not found
            lastUpdatedEl.textContent = lastUpdatedCell ? `Last update: ${lastUpdatedCell}` : 'Last update: --';
        }

                // Store data globally for zone detail view
                globalSheetData = data;
                
                // Find sections in the data
                let currentSection = '';
                let rowIndex = 0;
                
                while (rowIndex < data.length) {
                    const row = data[rowIndex];
                    if (row.length === 0) {
                        rowIndex++;
                            continue;
                        }
                        
                    const firstCell = String(row[0] || '').trim();
                    
                    // Detect section headers (check column A, column N for DM, column AC for Pre-DM)
                    const colNCell = String(row[13] || '').trim(); // column N
                    const colACCell = String(row[PREDM_LABEL_COL] || '').trim(); // column AC
                    if (firstCell.includes('SCREENING OVERVIEW')) {
                        currentSection = 'screening';
                        rowIndex++;
                        continue;
                    } else if (firstCell.includes('DM PATIENTS OVERVIEW') || colNCell.includes('DM OVERVIEW') || colNCell.includes('DM PATIENTS OVERVIEW')) {
                        currentSection = 'dm';
                        rowIndex++;
                        continue;
                    } else if (firstCell.includes('PRE-DM PATIENTS OVERVIEW') || colACCell.includes('PRE-DM OVERVIEW') || colACCell.includes('PRE-DM PATIENTS OVERVIEW')) {
                        currentSection = 'predm';
                        rowIndex++;
                        continue;
                    }
                    
                    // Parse Pre-DM Overview (columns AC and AD)
                if (currentSection === 'predm') {
                    const rawLabel = String(row[PREDM_LABEL_COL] || '').trim().toLowerCase();
                    const predmValue = row[PREDM_VALUE_COL];
                    const parsedValue = parseInt(String(predmValue ?? '').replace(/,/g, ''), 10);
                    const hasNumber = !isNaN(parsedValue);
                    
                    if (rawLabel.includes('pre-dm patients') && hasNumber) {
                        predmPatientsTotal = parsedValue;
                        document.getElementById('preDMPatientsValue').textContent = parsedValue.toLocaleString();
                        updatePreDMPercentages();
                    } else if (rawLabel.includes('pre-dm to normal') && hasNumber) {
                        predmToNormalTotal = parsedValue;
                        document.getElementById('preDMToNormalValue').textContent = parsedValue.toLocaleString();
                        updatePreDMPercentages();
                    } else if (rawLabel.includes('pre-dm no follow-up') && hasNumber) {
                        predmNoFollowupTotal = parsedValue;
                        document.getElementById('preDMNoFollowupValue').textContent = parsedValue.toLocaleString();
                        updatePreDMPercentages();
                    }
                }
                        
                // Parse Screening Overview (new labels in column A/B)
                if (currentSection === 'screening') {
                    if (firstCell === 'SCREENING Target' && row[1]) {
                        const targetNum = parseInt((row[1] || '').replace(/,/g, ''), 10);
                        if (!isNaN(targetNum)) {
                            screeningTargetTotal = targetNum;
                            document.getElementById('targetValue').textContent = targetNum.toLocaleString();
                            updateScreeningPercentage();
                        }
                    } else if (firstCell.startsWith('SCREENING screened') && row[1]) {
                        const currentNum = parseInt((row[1] || '').replace(/,/g, ''), 10);
                        if (!isNaN(currentNum)) {
                            screeningCurrentTotal = currentNum;
                            document.getElementById('currentValue').textContent = currentNum.toLocaleString();
                            updateScreeningPercentage();
                        }
                    } else if (firstCell.startsWith('SCREENING Remaining') && row[1]) {
                        const remainingNum = parseInt((row[1] || '').replace(/,/g, ''), 10);
                        if (!isNaN(remainingNum)) {
                            // current + remaining should equal target; we keep current/target for percentage
                        }
                    } else if (firstCell.toLowerCase().startsWith('screening opportunities') && row[1]) {
                        const oppNum = parseInt((row[1] || '').replace(/,/g, ''), 10);
                        if (!isNaN(oppNum)) {
                            screeningOpportunitiesTotal = oppNum;
                            const oppEl = document.getElementById('opportunitiesValue');
                            if (oppEl) oppEl.textContent = oppNum.toLocaleString();
                            updateScreeningPercentage();
                        }
                    }
                }
                    
                    // Parse DM Overview (columns N and O)
                    if (currentSection === 'dm') {
                        const dmLabelCol = 13; // column N
                        const dmValueCol = 14; // column O
                        const dmLabel = String(row[dmLabelCol] || '').trim();
                        const dmValue = row[dmValueCol];
                        
                        if (dmLabel === 'DM Patients' && dmValue) {
                            const num = parseInt(String(dmValue || '').replace(/,/g, ''), 10);
                            if (!isNaN(num)) {
                                dmPatientsTotal = num;
                                document.getElementById('dmPatientsValue').textContent = num.toLocaleString();
                                updateDMPercentages();
                            }
                        } else if (dmLabel === 'Controlled DM' && dmValue) {
                            const num = parseInt(String(dmValue || '').replace(/,/g, ''), 10);
                            if (!isNaN(num)) {
                                controlledDMTotal = num;
                                document.getElementById('controlledDMValue').textContent = num.toLocaleString();
                                updateDMPercentages();
                            }
                        } else if (dmLabel === 'Uncontrolled DM' && dmValue) {
                            const num = parseInt(String(dmValue || '').replace(/,/g, ''), 10);
                            if (!isNaN(num)) {
                                uncontrolledDMTotal = num;
                                document.getElementById('uncontrolledDMValue').textContent = num.toLocaleString();
                                updateDMPercentages();
                            }
                        }
                    }
                    
                    rowIndex++;
                }


                populateScreeningZones(data);
                populateDMZones(data);
                populatePreDMZones(data);

                // Fallback: Pre-DM overview when section detection misses
                // AD2 (row index 1, col index 29) expected to hold Pre-DM Patients
                if (predmPatientsTotal === null && data.length > 1 && typeof data[1][29] !== 'undefined') {
                    const val = parseInt(String(data[1][29] || '').replace(/,/g, ''), 10);
                    if (!isNaN(val)) {
                        predmPatientsTotal = val;
                        document.getElementById('preDMPatientsValue').textContent = val.toLocaleString();
                        updatePreDMPercentages();
                    }
                }
                // AD3 -> row index 2, col 29: Pre-DM to Normal
                if (predmToNormalTotal === null && data.length > 2 && typeof data[2][29] !== 'undefined') {
                    const val = parseInt(String(data[2][29] || '').replace(/,/g, ''), 10);
                    if (!isNaN(val)) {
                        predmToNormalTotal = val;
                        document.getElementById('preDMToNormalValue').textContent = val.toLocaleString();
                        updatePreDMPercentages();
                    }
                }
                // AD4 -> row index 3, col 29: Pre-DM No Follow-up
                if (predmNoFollowupTotal === null && data.length > 3 && typeof data[3][29] !== 'undefined') {
                    const val = parseInt(String(data[3][29] || '').replace(/,/g, ''), 10);
                    if (!isNaN(val)) {
                        predmNoFollowupTotal = val;
                        document.getElementById('preDMNoFollowupValue').textContent = val.toLocaleString();
                        updatePreDMPercentages();
                    }
                }

                // Fallback: explicit rows if section headers are missing
                // Screening overview
                if (screeningTargetTotal === null && data[SCREENING_TARGET_ROW] && data[SCREENING_TARGET_ROW][1]) {
                    const val = parseInt((data[SCREENING_TARGET_ROW][1] || '').replace(/,/g, ''), 10);
                    if (!isNaN(val)) {
                        screeningTargetTotal = val;
                        document.getElementById('targetValue').textContent = val.toLocaleString();
                    }
                }
                if (screeningCurrentTotal === null && data[SCREENING_CURRENT_ROW] && data[SCREENING_CURRENT_ROW][1]) {
                    const val = parseInt((data[SCREENING_CURRENT_ROW][1] || '').replace(/,/g, ''), 10);
                    if (!isNaN(val)) {
                        screeningCurrentTotal = val;
                        document.getElementById('currentValue').textContent = val.toLocaleString();
                    }
                }
                updateScreeningPercentage();

                // DM overview from fixed cells Q2-Q4
                if (dmPatientsTotal === null || controlledDMTotal === null || uncontrolledDMTotal === null) {
                    const dmPatientsCell = data?.[DM_OVERVIEW_PATIENTS_ROW]?.[DM_OVERVIEW_COL];
                    const dmControlledCell = data?.[DM_OVERVIEW_CONTROLLED_ROW]?.[DM_OVERVIEW_COL];
                    const dmUncontrolledCell = data?.[DM_OVERVIEW_UNCONTROLLED_ROW]?.[DM_OVERVIEW_COL];

                    const dmPatientsVal = parseInt(String(dmPatientsCell ?? '').replace(/,/g, ''), 10);
                    const dmControlledVal = parseInt(String(dmControlledCell ?? '').replace(/,/g, ''), 10);
                    const dmUncontrolledVal = parseInt(String(dmUncontrolledCell ?? '').replace(/,/g, ''), 10);

                    if (!isNaN(dmPatientsVal)) {
                        dmPatientsTotal = dmPatientsVal;
                        const el = document.getElementById('dmPatientsValue');
                        if (el) el.textContent = dmPatientsVal.toLocaleString();
                    }
                    if (!isNaN(dmControlledVal)) {
                        controlledDMTotal = dmControlledVal;
                        const el = document.getElementById('controlledDMValue');
                        if (el) el.textContent = dmControlledVal.toLocaleString();
                    }
                    if (!isNaN(dmUncontrolledVal)) {
                        uncontrolledDMTotal = dmUncontrolledVal;
                        const el = document.getElementById('uncontrolledDMValue');
                        if (el) el.textContent = dmUncontrolledVal.toLocaleString();
                    }
                    updateDMPercentages();
                }

                // PRE-DM overview from fixed cells AF2-AF4
                if (predmPatientsTotal === null || predmToNormalTotal === null || predmNoFollowupTotal === null) {
                    const prePatientsCell = data?.[PREDM_OVERVIEW_PATIENTS_ROW]?.[PREDM_OVERVIEW_COL];
                    const preNormalCell = data?.[PREDM_OVERVIEW_NORMAL_ROW]?.[PREDM_OVERVIEW_COL];
                    const preNoFollowCell = data?.[PREDM_OVERVIEW_NOFOLLOW_ROW]?.[PREDM_OVERVIEW_COL];

                    const prePatientsVal = parseInt(String(prePatientsCell ?? '').replace(/,/g, ''), 10);
                    const preNormalVal = parseInt(String(preNormalCell ?? '').replace(/,/g, ''), 10);
                    const preNoFollowVal = parseInt(String(preNoFollowCell ?? '').replace(/,/g, ''), 10);

                    if (!isNaN(prePatientsVal)) {
                        predmPatientsTotal = prePatientsVal;
                        const el = document.getElementById('preDMPatientsValue');
                        if (el) el.textContent = prePatientsVal.toLocaleString();
                    }
                    if (!isNaN(preNormalVal)) {
                        predmToNormalTotal = preNormalVal;
                        const el = document.getElementById('preDMToNormalValue');
                        if (el) el.textContent = preNormalVal.toLocaleString();
                    }
                    if (!isNaN(preNoFollowVal)) {
                        predmNoFollowupTotal = preNoFollowVal;
                        const el = document.getElementById('preDMNoFollowupValue');
                        if (el) el.textContent = preNoFollowVal.toLocaleString();
                    }
                    updatePreDMPercentages();
                }

                // DM overview fallback (check columns N and O)
                if (dmPatientsTotal === null) {
                    for (let i = 0; i < data.length; i++) {
                        const row = data[i] || [];
                        const label = String(row[13] || '').trim(); // column N
                        if (label === 'DM Patients' && row[14]) {
                            const val = parseInt(String(row[14] || '').replace(/,/g, ''), 10);
                            if (!isNaN(val)) {
                                dmPatientsTotal = val;
                                document.getElementById('dmPatientsValue').textContent = val.toLocaleString();
                                break;
                            }
                        }
                    }
                }
                if (controlledDMTotal === null) {
                    for (let i = 0; i < data.length; i++) {
                        const row = data[i] || [];
                        const label = String(row[13] || '').trim(); // column N
                        if (label === 'Controlled DM' && row[14]) {
                            const val = parseInt(String(row[14] || '').replace(/,/g, ''), 10);
                            if (!isNaN(val)) {
                                controlledDMTotal = val;
                                document.getElementById('controlledDMValue').textContent = val.toLocaleString();
                                break;
                            }
                        }
                    }
                }
                if (uncontrolledDMTotal === null) {
                    for (let i = 0; i < data.length; i++) {
                        const row = data[i] || [];
                        const label = String(row[13] || '').trim(); // column N
                        if (label === 'Uncontrolled DM' && row[14]) {
                            const val = parseInt(String(row[14] || '').replace(/,/g, ''), 10);
                            if (!isNaN(val)) {
                                uncontrolledDMTotal = val;
                                document.getElementById('uncontrolledDMValue').textContent = val.toLocaleString();
                                break;
                            }
                        }
                    }
                }
                updateDMPercentages();
            }
            
            // Load data when page loads
            loadDataFromGoogleSheets();
        })();

        // Helper function to normalize PHC names for matching
        function normalizePHC(phc) {
            if (!phc) return '';
            return phc.trim().toLowerCase().replace(/\s+/g, ' ');
        }

        // Find PHC rankings section in data
        function findPHCRankingsSection(data, sectionName) {
            let found = false;
            let startRow = -1;
            
            for (let i = 0; i < data.length; i++) {
                const row = data[i] || [];
                const firstCell = String(row[0] || '').trim().toUpperCase();
                const colDCell = String(row[3] || '').trim().toUpperCase(); // Check column D (index 3)
                const colICell = String(row[8] || '').trim().toUpperCase(); // Check column I (index 8) for screening PHC
                const colQCell = String(row[16] || '').trim().toUpperCase(); // Check column Q (index 16) for DM Zone
                const colWCell = String(row[22] || '').trim().toUpperCase(); // Check column W (index 22) for DM PHC
                const colAFCell = String(row[30] || '').trim().toUpperCase(); // Check column AF (index 30) for Pre-DM Zone
                const colALCell = String(row[37] || '').trim().toUpperCase(); // Check column AL (index 37) for Pre-DM PHC
                const searchName = sectionName.toUpperCase();
                
                // Look for section header in column A, D, I, Q, W, AF, or AL
                if (firstCell.includes(searchName) || 
                    (firstCell.includes('PHC') && firstCell.includes('RANKING')) ||
                    colDCell.includes('SCREENING PHC') || colDCell.includes('PHC') ||
                    colICell.includes('SCREENING PHC') || colICell.includes('PHC') ||
                    colQCell.includes('DM ZONE') || colQCell.includes('DM') ||
                    colWCell.includes('DM PHC') || colWCell.includes('PHC') ||
                    colAFCell.includes('PRE-DM ZONE') || colAFCell.includes('PRE-DM') ||
                    colALCell.includes('PRE-DM PHC') || colALCell.includes('PHC')) {
                    // Look for the next row that has column headers
                    for (let j = i + 1; j < Math.min(i + 5, data.length); j++) {
                        const nextRow = data[j] || [];
                        const nextFirstCell = String(nextRow[0] || '').trim().toUpperCase();
                        const nextColDCell = String(nextRow[3] || '').trim().toUpperCase(); // Check column D
                        const nextColICell = String(nextRow[8] || '').trim().toUpperCase(); // Check column I
                        const nextColQCell = String(nextRow[16] || '').trim().toUpperCase(); // Check column Q
                        const nextColWCell = String(nextRow[22] || '').trim().toUpperCase(); // Check column W
                        const nextColAFCell = String(nextRow[30] || '').trim().toUpperCase(); // Check column AF
                        const nextColALCell = String(nextRow[37] || '').trim().toUpperCase(); // Check column AL
                        // Check if this looks like a header row
                        if (nextFirstCell.includes('RANK') || nextFirstCell.includes('PHC') || 
                            nextColDCell.includes('PHC') || nextColDCell.includes('SCREENING') ||
                            nextColICell.includes('PHC') || nextColICell.includes('SCREENING') ||
                            nextColQCell.includes('DM') || nextColQCell.includes('ZONE') ||
                            nextColWCell.includes('DM') || nextColWCell.includes('PHC') ||
                            nextColAFCell.includes('PRE-DM') || nextColAFCell.includes('ZONE') ||
                            nextColALCell.includes('PRE-DM') || nextColALCell.includes('PHC') ||
                            nextFirstCell === '' || nextFirstCell === '1') {
                            found = true;
                            // Start from the row after headers (skip empty row and header row)
                            startRow = j + 1;
                            // If first cell is a number (rank), start from that row
                            if (!isNaN(parseInt(nextFirstCell)) || !isNaN(parseInt(nextColDCell)) || 
                                !isNaN(parseInt(nextColICell)) || !isNaN(parseInt(nextColQCell)) || 
                                !isNaN(parseInt(nextColWCell)) || !isNaN(parseInt(nextColAFCell)) ||
                                !isNaN(parseInt(nextColALCell))) {
                                startRow = j;
                            }
                            break;
                        }
                    }
                    if (found) break;
                }
            }
            
            return { found, startRow };
        }

        // Populate PHCs for a specific zone
        function populateZonePHCs(data, zoneName, context) {
            let sectionName = '';
            let nameCol, valueCol, targetCol, indicatorCol, controlledCol, normalCol, followupCol, oppCol;
            
            if (context === 'screening') {
                sectionName = 'PHC Rankings - Screening';
                nameCol = SCREENING_PHC_NAME_COL;
                valueCol = SCREENING_PHC_VALUE_COL;
                oppCol = SCREENING_PHC_OPP_COL;
                targetCol = SCREENING_PHC_TARGET_COL;
                indicatorCol = SCREENING_PHC_INDICATOR_COL;
            } else if (context === 'dm') {
                sectionName = 'PHC Rankings - Uncontrolled DM';
                nameCol = DM_PHC_NAME_COL;
                valueCol = DM_PHC_TOTAL_COL;
                controlledCol = DM_PHC_CONTROLLED_COL;
                indicatorCol = DM_PHC_INDICATOR_COL;
            } else if (context === 'predm') {
                sectionName = 'PHC Rankings - No Follow-up';
                nameCol = PREDM_PHC_NAME_COL;
                valueCol = PREDM_PHC_TOTAL_COL;
                normalCol = PREDM_PHC_NORMAL_COL;
                followupCol = PREDM_PHC_FOLLOWUP_COL;
                indicatorCol = PREDM_PHC_INDICATOR_COL;
            }
            
            const { found, startRow } = findPHCRankingsSection(data, sectionName);
            if (!found || startRow < 0) return [];
            
            const phcs = [];
            for (let i = startRow; i < data.length; i++) {
                const row = data[i] || [];
                const phcName = (row[nameCol] || '').trim();
                
                if (!phcName || phcName === '') break;
                
                // Debug: log PHC names that might match "al fahad al janubi"
                if (normalizePHC(phcName).includes('fahad') && normalizePHC(phcName).includes('janubi')) {
                    console.log('Found potential match for al fahad al janubi:', phcName, 'Normalized:', normalizePHC(phcName));
                }
                
                // Check if this PHC belongs to the selected zone
                let phcZone = PHC_ZONE_MAP[phcName];
                
                // If not found, try case-insensitive matching
                if (!phcZone) {
                    const normalizedPhcName = normalizePHC(phcName);
                    const matchingKey = Object.keys(PHC_ZONE_MAP).find(key => 
                        normalizePHC(key) === normalizedPhcName
                    );
                    if (matchingKey) {
                        phcZone = PHC_ZONE_MAP[matchingKey];
                    } else {
                        // Try more flexible matching - remove all spaces and compare
                        const phcNameNoSpaces = normalizedPhcName.replace(/\s+/g, '');
                        const matchingKeyNoSpaces = Object.keys(PHC_ZONE_MAP).find(key => {
                            const keyNoSpaces = normalizePHC(key).replace(/\s+/g, '');
                            return keyNoSpaces === phcNameNoSpaces;
                        });
                        if (matchingKeyNoSpaces) {
                            phcZone = PHC_ZONE_MAP[matchingKeyNoSpaces];
                        }
                    }
                }
                
                if (phcZone === zoneName) {
                    if (context === 'screening') {
                        const achievedRaw = (row[valueCol] || '').trim();
                        const oppRaw = oppCol !== undefined ? (row[oppCol] || '').trim() : '';
                        const targetRaw = (row[targetCol] || '').trim();
                        const indicatorRaw = (row[indicatorCol] || '').toString().trim();
                        
                        const oppNum = parseFloat(oppRaw.replace(/,/g, ''));
                        const achievedNum = parseFloat(achievedRaw.replace(/,/g, ''));
                        const targetNum = parseFloat(targetRaw.replace(/,/g, ''));
                        const indicatorNum = parseFloat(indicatorRaw);
                        
                        // Show count instead of percentage
                        let valueText = achievedRaw || (achievedNum ? achievedNum.toLocaleString() : '0');
                        const oppText = oppRaw || (!isNaN(oppNum) ? oppNum.toLocaleString() : '0');
                        
                        phcs.push({
                            name: phcName,
                            opportunities: oppText,
                            value: valueText,
                            achieved: achievedNum,
                            target: targetNum,
                            indicator: indicatorNum
                        });
                    } else if (context === 'dm') {
                        const totalRaw = (row[valueCol] || '').trim();
                        const controlledRaw = (row[controlledCol] || '').trim();
                        const indicatorRaw = (row[indicatorCol] || '').toString().trim();
                        
                        const totalNum = parseFloat(totalRaw.replace(/,/g, ''));
                        const controlledNum = parseFloat(controlledRaw.replace(/,/g, ''));
                        const indicatorNum = parseFloat(indicatorRaw);
                        
                        let valueText = '0%';
                        if (!isNaN(totalNum) && !isNaN(controlledNum) && totalNum !== 0) {
                            const percent = ((controlledNum / totalNum) * 100).toFixed(1);
                            valueText = `${percent}%`;
                        }
                        
                        phcs.push({
                            name: phcName,
                            value: valueText,
                            total: totalNum,
                            controlled: controlledNum,
                            indicator: indicatorNum
                        });
                    } else if (context === 'predm') {
                        const totalRaw = (row[valueCol] || '').trim();
                        const normalRaw = (row[normalCol] || '').trim();
                        const followupRaw = (row[followupCol] || '').trim();
                        const indicatorRaw = (row[indicatorCol] || '').toString().trim();
                        
                        const totalNum = parseFloat(totalRaw.replace(/,/g, ''));
                        const normalNum = parseFloat(normalRaw.replace(/,/g, ''));
                        const followupNum = parseFloat(followupRaw.replace(/,/g, ''));
                        const indicatorNum = parseFloat(indicatorRaw);
                        
                        let normalPercentText = '0%';
                        if (!isNaN(totalNum) && !isNaN(normalNum) && totalNum !== 0) {
                            const percent = ((normalNum / totalNum) * 100).toFixed(1);
                            normalPercentText = `${percent}%`;
                        }
                        
                        let followupPercentText = '0%';
                        if (!isNaN(totalNum) && !isNaN(followupNum) && totalNum !== 0) {
                            const percent = ((followupNum / totalNum) * 100).toFixed(1);
                            followupPercentText = `${percent}%`;
                        }
                        
                        phcs.push({
                            name: phcName,
                            normalPercent: normalPercentText,
                            followupPercent: followupPercentText,
                            total: totalNum,
                            normal: normalNum,
                            followup: followupNum,
                            indicator: indicatorNum
                        });
                    }
                }
            }
            
            return phcs;
        }

        // Render PHC list for zone detail view
        function renderZonePHCList(containerId, phcs, context) {
            const container = document.getElementById(containerId);
            if (!container) return;
            
            // Filter PHCs based on user scope
            if (userScopeData && userScopeData.scope === 'phc') {
                // PHC users should only see their own PHC
                phcs = phcs.filter(phc => phc.name === userScopeData.phc_id);
            }
            
            let html = '';
            
            if (context === 'screening') {
                html = '<div class="zone-header"><div class="zone-header-item">PHC</div><div class="zone-header-item">Missed Opps</div><div class="zone-header-item">Screened</div><div class="zone-header-item">Weekly</div></div>';
                phcs.forEach(phc => {
                    const indicatorNum = phc.indicator || 0;
                    let indicatorArrow = '-';
                    let indicatorClass = 'zone-arrow zone-arrow-neutral';
                    let indicatorText = '';
                    if (!isNaN(indicatorNum) && indicatorNum !== 0) {
                        indicatorArrow = indicatorNum > 0 ? '↑' : '↓';
                        indicatorClass = indicatorNum > 0 ? 'zone-arrow zone-arrow-up' : 'zone-arrow zone-arrow-down';
                        indicatorText = Math.abs(indicatorNum).toLocaleString();
                    } else if (!isNaN(indicatorNum) && indicatorNum === 0) {
                        indicatorText = '0';
                    }
                    
                    const displayName = PHC_DISPLAY_NAMES[phc.name] || PHC_DISPLAY_NAMES[phc.name?.toLowerCase()] || phc.name;
                    
                    html += `
                        <div class="zone-item zone-item--screening">
                            <div class="zone-name">
                                <span class="zone-name-text">${displayName}</span>
                            </div>
                            <span class="zone-value">${phc.opportunities || '0'}</span>
                            <span class="zone-value">${phc.value}</span>
                            <div class="zone-7d-indicator">
                                <span class="${indicatorClass}">
                                    ${indicatorArrow}${indicatorText ? ` ${indicatorText}` : ''}
                                </span>
                            </div>
                        </div>
                    `;
                });
            } else if (context === 'dm') {
                html = '<div class="zone-header zone-header--dm"><div class="zone-header-item">PHC</div><div class="zone-header-item">Controlled</div><div class="zone-header-item">Uncontrolled</div><div class="zone-header-item">Weekly</div></div>';
                phcs.forEach(phc => {
                    const indicatorNum = phc.indicator || 0;
                    let indicatorArrow = '-';
                    let indicatorClass = 'zone-arrow zone-arrow-neutral';
                    let indicatorText = '';
                    if (!isNaN(indicatorNum) && indicatorNum !== 0) {
                        indicatorArrow = indicatorNum > 0 ? '↑' : '↓';
                        indicatorClass = indicatorNum > 0 ? 'zone-arrow zone-arrow-up' : 'zone-arrow zone-arrow-down';
                        indicatorText = Math.abs(indicatorNum).toLocaleString();
                    } else if (!isNaN(indicatorNum) && indicatorNum === 0) {
                        indicatorText = '0';
                    }
                    
                    const controlledText = !isNaN(phc.controlled) ? phc.controlled.toLocaleString() : '0';
                    const uncontrolledText = !isNaN(phc.total) && !isNaN(phc.controlled) ? Math.max(0, phc.total - phc.controlled).toLocaleString() : '0';

                    const displayName = PHC_DISPLAY_NAMES[phc.name] || PHC_DISPLAY_NAMES[phc.name?.toLowerCase()] || phc.name;

                    html += `
                        <div class="zone-item zone-item--dm">
                            <div class="zone-name">
                                <span class="zone-name-text">${displayName}</span>
                            </div>
                            <span class="zone-value">${controlledText}</span>
                            <span class="zone-value">${uncontrolledText}</span>
                            <div class="zone-7d-indicator">
                                <span class="${indicatorClass}">
                                    ${indicatorArrow}${indicatorText ? ` ${indicatorText}` : ''}
                                </span>
                            </div>
                        </div>
                    `;
                });
            } else if (context === 'predm') {
                html = '<div class="zone-header zone-header--predm"><div class="zone-header-item">PHC</div><div class="zone-header-item">Normal</div><div class="zone-header-item">Follow-up</div><div class="zone-header-item">Weekly</div></div>';
                phcs.forEach(phc => {
                    const indicatorNum = phc.indicator || 0;
                    let indicatorArrow = '-';
                    let indicatorClass = 'zone-arrow zone-arrow-neutral';
                    let indicatorText = '';
                    if (!isNaN(indicatorNum) && indicatorNum !== 0) {
                        indicatorArrow = indicatorNum > 0 ? '↑' : '↓';
                        indicatorClass = indicatorNum > 0 ? 'zone-arrow zone-arrow-up' : 'zone-arrow zone-arrow-down';
                        indicatorText = Math.abs(indicatorNum).toLocaleString();
                    } else if (!isNaN(indicatorNum) && indicatorNum === 0) {
                        indicatorText = '0';
                    }
                    
                    const normalText = !isNaN(phc.normal) ? phc.normal.toLocaleString() : '0';
                    const followupText = !isNaN(phc.followup) ? phc.followup.toLocaleString() : '0';

                    const displayName = PHC_DISPLAY_NAMES[phc.name] || PHC_DISPLAY_NAMES[phc.name?.toLowerCase()] || phc.name;

                    html += `
                        <div class="zone-item zone-item--predm">
                            <div class="zone-name">
                                <span class="zone-name-text">${displayName}</span>
                            </div>
                            <span class="zone-value" style="color: #4a9e5f;">${normalText}</span>
                            <span class="zone-value" style="color: #c85a5a;">${followupText}</span>
                            <div class="zone-7d-indicator">
                                <span class="${indicatorClass}">
                                    ${indicatorArrow}${indicatorText ? ` ${indicatorText}` : ''}
                                </span>
                            </div>
                        </div>
                    `;
                });
            }
            
            if (phcs.length === 0) {
                html += '<div class="zone-item"><span class="zone-name">No PHC data available</span></div>';
            }
            
            container.innerHTML = html;
        }

        // Zone navigation functions
        function navigateToZone(zoneName, context) {
            // Hide main view and show zone detail view
            const mainView = document.getElementById('mainView');
            const zoneDetailView = document.getElementById('zoneDetailView');
            
            if (mainView) mainView.classList.add('hidden');
            if (zoneDetailView) zoneDetailView.style.display = 'flex';

            // Update zone detail page title (use full name if available)
            const fullZoneName = ZONE_FULL_NAMES[zoneName] || ZONE_FULL_NAMES[zoneName?.toUpperCase?.()] || zoneName;

            const titleEl = document.getElementById('zoneDetailTitle');
            if (titleEl) titleEl.textContent = fullZoneName;

            // Initialize carousel for zone detail view
            const zoneCarousel = document.getElementById('zoneDetailCarousel');
            const zoneDotsContainer = document.getElementById('zoneDetailCarouselDots');
            
            if (zoneCarousel && zoneDotsContainer) {
                // Clear existing dots
                zoneDotsContainer.innerHTML = '';
                const zoneCards = Array.from(zoneCarousel.querySelectorAll('.card'));
                zoneCards.forEach((_, i) => {
                    const dot = document.createElement('button');
                    dot.type = 'button';
                    dot.className = 'carousel-dot';
                    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
                    dot.addEventListener('click', () => {
                        zoneCarousel.scrollTo({
                            left: i * zoneCarousel.clientWidth,
                            behavior: 'smooth'
                        });
                    });
                    zoneDotsContainer.appendChild(dot);
                });
                
                // Update dots on scroll
                const updateZoneDots = () => {
                    const index = Math.round(zoneCarousel.scrollLeft / zoneCarousel.clientWidth);
                    const dots = zoneDotsContainer.querySelectorAll('.carousel-dot');
                    dots.forEach((dot, idx) => dot.classList.toggle('active', idx === index));
                };
                
                let zoneScrollTimeout;
                zoneCarousel.addEventListener('scroll', () => {
                    clearTimeout(zoneScrollTimeout);
                    zoneScrollTimeout = setTimeout(updateZoneDots, 50);
                }, { passive: true });
                
                updateZoneDots();
            }

            // Populate PHCs for the selected zone
            if (globalSheetData) {
                const screeningPHCs = populateZonePHCs(globalSheetData, zoneName, 'screening');
                const dmPHCs = populateZonePHCs(globalSheetData, zoneName, 'dm');
                const predmPHCs = populateZonePHCs(globalSheetData, zoneName, 'predm');
                
                // Calculate and display zone overview metrics for Screening
                let zoneTargetTotal = 0;
                let zoneCurrentTotal = 0;
                screeningPHCs.forEach(phc => {
                    if (!isNaN(phc.target)) zoneTargetTotal += phc.target;
                    if (!isNaN(phc.achieved)) zoneCurrentTotal += phc.achieved;
                });
                const zonePercentage = zoneTargetTotal > 0 ? ((zoneCurrentTotal / zoneTargetTotal) * 100).toFixed(1) : 0;
                
                document.getElementById('zoneDetailTargetValue').textContent = zoneTargetTotal.toLocaleString();
                document.getElementById('zoneDetailCurrentValue').textContent = zoneCurrentTotal.toLocaleString();
                document.getElementById('zoneDetailPercentageValue').textContent = `${zonePercentage}%`;
                
                // Calculate and display zone overview metrics for DM
                let zoneDMTotal = 0;
                let zoneControlledTotal = 0;
                dmPHCs.forEach(phc => {
                    if (!isNaN(phc.total)) zoneDMTotal += phc.total;
                    if (!isNaN(phc.controlled)) zoneControlledTotal += phc.controlled;
                });
                const zoneUncontrolledTotal = zoneDMTotal - zoneControlledTotal;
                const zoneControlledPercent = zoneDMTotal > 0 ? ((zoneControlledTotal / zoneDMTotal) * 100).toFixed(1) : 0;
                const zoneUncontrolledPercent = zoneDMTotal > 0 ? ((zoneUncontrolledTotal / zoneDMTotal) * 100).toFixed(1) : 0;
                
                document.getElementById('zoneDetailDMPatientsValue').textContent = zoneDMTotal.toLocaleString();
                document.getElementById('zoneDetailControlledDMValue').textContent = zoneControlledTotal.toLocaleString();
                document.getElementById('zoneDetailControlledDMPercent').textContent = `${zoneControlledPercent}%`;
                document.getElementById('zoneDetailUncontrolledDMValue').textContent = zoneUncontrolledTotal.toLocaleString();
                document.getElementById('zoneDetailUncontrolledDMPercent').textContent = `${zoneUncontrolledPercent}%`;
                
                // Calculate and display zone overview metrics for Pre-DM
                let zonePreDMTotal = 0;
                let zoneNormalTotal = 0;
                let zoneFollowupTotal = 0;
                predmPHCs.forEach(phc => {
                    if (!isNaN(phc.total)) zonePreDMTotal += phc.total;
                    if (!isNaN(phc.normal)) zoneNormalTotal += phc.normal;
                    if (!isNaN(phc.followup)) zoneFollowupTotal += phc.followup;
                });
                const zoneNormalPercent = zonePreDMTotal > 0 ? ((zoneNormalTotal / zonePreDMTotal) * 100).toFixed(1) : 0;
                const zoneFollowupPercent = zonePreDMTotal > 0 ? ((zoneFollowupTotal / zonePreDMTotal) * 100).toFixed(1) : 0;
                
                document.getElementById('zoneDetailPreDMPatientsValue').textContent = zonePreDMTotal.toLocaleString();
                document.getElementById('zoneDetailPreDMToNormalValue').textContent = zoneNormalTotal.toLocaleString();
                document.getElementById('zoneDetailPreDMToNormalPercent').textContent = `${zoneNormalPercent}%`;
                document.getElementById('zoneDetailPreDMNoFollowupValue').textContent = zoneFollowupTotal.toLocaleString();
                document.getElementById('zoneDetailPreDMNoFollowupPercent').textContent = `${zoneFollowupPercent}%`;
                
                renderZonePHCList('zoneDetailScreeningPHCs', screeningPHCs, 'screening');
                renderZonePHCList('zoneDetailDMPHCs', dmPHCs, 'dm');
                renderZonePHCList('zoneDetailPreDMPHCs', predmPHCs, 'predm');
            }
        }

        function goBackToMain() {
            const mainView = document.getElementById('mainView');
            const zoneDetailView = document.getElementById('zoneDetailView');
            
            if (mainView) mainView.classList.remove('hidden');
            if (zoneDetailView) zoneDetailView.style.display = 'none';
        }

    // Theme toggle (light / dark)
    (function() {
        const body = document.body;
        const themeToggle = document.getElementById('themeToggle');
        const THEME_KEY = 'phm-theme';

        function applyTheme(mode) {
            if (mode === 'dark') {
                body.classList.add('dark-mode');
                if (themeToggle) {
                    themeToggle.setAttribute('aria-label', 'Switch to light mode');
                }
            } else {
                body.classList.remove('dark-mode');
                if (themeToggle) {
                    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
                }
            }
            localStorage.setItem(THEME_KEY, mode);
        }

        const savedTheme = localStorage.getItem(THEME_KEY);
        // Default to light if nothing saved or value is invalid
        const initialTheme = savedTheme === 'dark' ? 'dark' : 'light';
        applyTheme(initialTheme);

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const nextMode = body.classList.contains('dark-mode') ? 'light' : 'dark';
                applyTheme(nextMode);
            });
        }
    })();

